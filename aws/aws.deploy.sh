# Create and set permissions
# BUCKET_NAME = "experiment-custom-elems"

# aws s3api create-bucket --bucket experiment-custom-elems --region ap-south-1 --create-bucket-configuration LocationConstraint=ap-south-1
# aws s3api put-bucket-policy --bucket  experiment-custom-elems --policy file://aws/aws-s3-bucket-policy.json
# aws s3 website s3://experiment-custom-elems/ --index-document test.html --error-document test.html

# Build and Deploy

# npm run buildDeploy
aws s3 sync ./test s3://experiment-custom-elems --delete