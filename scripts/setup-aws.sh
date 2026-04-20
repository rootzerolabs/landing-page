#!/bin/bash
set -e

# Default variables
REGION=${1:-"ap-south-1"}
PROFILE=${2:-"rz"}

# Set AWS Profile for all subsequent commands
export AWS_PROFILE="$PROFILE"

# Create a unique bucket name
BUCKET_NAME="rootzero-landing-page-$(date +%s)"
INDEX_DOCUMENT="index.html"

echo "Starting AWS Setup..."
echo "Region: $REGION"
echo "Profile: $PROFILE"
echo "Bucket Name: $BUCKET_NAME"
echo "----------------------------------------"

# 1. Create the S3 bucket
echo "1. Creating S3 bucket..."
aws s3api create-bucket --bucket "$BUCKET_NAME" --region "$REGION" --create-bucket-configuration LocationConstraint="$REGION" > /dev/null

# 2. Block all public access (Best practice: access will be via CloudFront OAC)
echo "2. Blocking public access to S3 bucket..."
aws s3api put-public-access-block \
    --bucket "$BUCKET_NAME" \
    --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# 3. Create CloudFront Origin Access Control (OAC)
echo "3. Creating CloudFront Origin Access Control (OAC)..."
OAC_CONFIG=$(cat <<EOF
{
    "Name": "${BUCKET_NAME}-oac",
    "Description": "OAC for ${BUCKET_NAME}",
    "SigningProtocol": "sigv4",
    "SigningBehavior": "always",
    "OriginAccessControlOriginType": "s3"
}
EOF
)
OAC_ID=$(aws cloudfront create-origin-access-control \
    --origin-access-control-config "$OAC_CONFIG" \
    --query 'OriginAccessControl.Id' \
    --output text)

# 4. Create CloudFront Distribution
echo "4. Creating CloudFront Distribution (this may take a few minutes to fully deploy)..."
DIST_CONFIG=$(cat <<EOF
{
    "CallerReference": "$(date +%s)",
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-${BUCKET_NAME}",
                "DomainName": "${BUCKET_NAME}.s3.${REGION}.amazonaws.com",
                "OriginAccessControlId": "${OAC_ID}",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-${BUCKET_NAME}",
        "ViewerProtocolPolicy": "redirect-to-https",
        "TrustedSigners": {
            "Enabled": false,
            "Quantity": 0
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "MinTTL": 0,
        "DefaultTTL": 3600,
        "MaxTTL": 86400
    },
    "Comment": "Distribution for ${BUCKET_NAME}",
    "Enabled": true,
    "DefaultRootObject": "${INDEX_DOCUMENT}",
    "CustomErrorResponses": {
        "Quantity": 1,
        "Items": [
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/${INDEX_DOCUMENT}",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            }
        ]
    }
}
EOF
)

# Use read to capture multiple outputs from a single AWS CLI command
read -r DIST_ID DIST_DOMAIN DIST_ARN <<< $(aws cloudfront create-distribution \
    --distribution-config "$DIST_CONFIG" \
    --query 'Distribution.[Id,DomainName,ARN]' \
    --output text)

# 5. Attach Bucket Policy to allow CloudFront to read
echo "5. Attaching Bucket Policy for CloudFront access..."
BUCKET_POLICY=$(cat <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipal",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${BUCKET_NAME}/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "${DIST_ARN}"
                }
            }
        }
    ]
}
EOF
)

aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy "$BUCKET_POLICY"

echo "----------------------------------------"
echo "✅ Setup Complete!"
echo "----------------------------------------"
echo "S3 Bucket Name:     $BUCKET_NAME"
echo "CloudFront Dist ID: $DIST_ID"
echo "CloudFront URL:     https://$DIST_DOMAIN"
echo "----------------------------------------"
echo "Please add the following values to your GitHub Repository Secrets:"
echo "S3_BUCKET:          $BUCKET_NAME"
echo "CLOUDFRONT_DIST_ID: $DIST_ID"
echo "AWS_REGION:         $REGION"
echo "----------------------------------------"


# Starting AWS Setup...
# Region: ap-south-1
# Profile: rz
# Bucket Name: rootzero-landing-page-1776711054
# ----------------------------------------
# 1. Creating S3 bucket...
# 2. Blocking public access to S3 bucket...
# 3. Creating CloudFront Origin Access Control (OAC)...
# 4. Creating CloudFront Distribution (this may take a few minutes to fully deploy)...
# 5. Attaching Bucket Policy for CloudFront access...
# ----------------------------------------
# ✅ Setup Complete!
# ----------------------------------------
# S3 Bucket Name:     rootzero-landing-page-1776711054
# CloudFront Dist ID: E15T84WDFWYNM8
# CloudFront URL:     https://d5lgta6n5egrq.cloudfront.net
# ----------------------------------------
# Please add the following values to your GitHub Repository Secrets:
# S3_BUCKET:          rootzero-landing-page-1776711054
# CLOUDFRONT_DIST_ID: E15T84WDFWYNM8
# AWS_REGION:         ap-south-1
# ----------------------------------------