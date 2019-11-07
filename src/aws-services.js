/**
 * @file aws-endpoints.js
 * 
 * This file set all non-standard endpoints used in AWS SDK.
 */
let endpoints = {}

if (process.env.LOCALSTACK_ENABLED) {
  endpoints = {
    apigateway: "http://localhost:4567",
    kinesis: "http://localhost:4568",
    dynamodb: "http://localhost:4569",
    dynamodbstreams: "http://localhost:4570",
    elasticsearch: "http://localhost:4571",
    s3: "http://localhost:4572",
    firehose: "http://localhost:4573",
    lambda: "http://localhost:4574",
    sns: "http://localhost:4575",
    sqs: "http://localhost:4576",
    redshift: "http://localhost:4577",
    es: "http://localhost:4578",
    ses: "http://localhost:4579",
    route53: "http://localhost:4580",
    cloudformation: "http://localhost:4581",
    cloudwatch: "http://localhost:4582",
    ssm: "http://localhost:4583",
    secretsmanager: "http://localhost:4584",
    stepfunctions: "http://localhost:4585",
    logs: "http://localhost:4586",
    events: "http://localhost:4587",
    elb: "http://localhost:4588",
    iot: "http://localhost:4589",
    sts: "http://localhost:4592",
    iam: "http://localhost:4593",
    rds: "http://localhost:4594",
    cloudsearch: "http://localhost:4595",
    swf: "http://localhost:4596"
  }
}

/**
 * @todo A few of these names must be changed.
 */
const names = {
  apigateway: "APIGateway",
  kinesis: "Kinesis",
  dynamodb: "DynamoDB",
  dynamodbstreams: "dynamodbstreams",
  elasticsearch: "elasticsearch",
  s3: "S3",
  firehose: "Firehose",
  lambda: "Lambda",
  sns: "SNS",
  sqs: "SQS",
  redshift: "Redshift",
  es: "ES",
  ses: "SES",
  route53: "Route53",
  cloudformation: "Cloudformation",
  cloudwatch: "Cloudwatch",
  ssm: "SSM",
  secretsmanager: "SecretsManager",
  stepfunctions: "StepFunctions",
  logs: "logs",
  events: "Events",
  elb: "ELB",
  iot: "IoT",
  sts: "STS",
  iam: "IAM",
  rds: "RDS",
  cloudsearch: "CloudSearch",
  swf: "SWF"
}

module.exports = {
  names,
  endpoints
}