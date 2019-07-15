#!/bin/bash

echo "Configuring AWS credentials..."
export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-east-2

echo "Populating queues..."
aws --endpoint-url=http://localhost:4576 sqs create-queue --queue-name my-first-queue
echo ""

echo "List queues..."
echo ""
aws --endpoint-url=http://localhost:4576 sqs list-queues
echo ""

echo "Finished!"
