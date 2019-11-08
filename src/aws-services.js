/**
 * @file aws-endpoints.js
 * 
 * This file set all non-standard endpoints used in AWS SDK.
 */
let endpoints = {}

if (process.env.LOCALSTACK_ENABLED) {
  endpoints = {
    apigateway: `http://${process.env.LOCALSTACK_HOSTNAME}:4567`,
    kinesis: `http://${process.env.LOCALSTACK_HOSTNAME}:4568`,
    dynamodb: `http://${process.env.LOCALSTACK_HOSTNAME}:4569`,
    dynamodbstreams: `http://${process.env.LOCALSTACK_HOSTNAME}:4570`,
    elasticsearch: `http://${process.env.LOCALSTACK_HOSTNAME}:4571`,
    s3: `http://${process.env.LOCALSTACK_HOSTNAME}:4572`,
    firehose: `http://${process.env.LOCALSTACK_HOSTNAME}:4573`,
    lambda: `http://${process.env.LOCALSTACK_HOSTNAME}:4574`,
    sns: `http://${process.env.LOCALSTACK_HOSTNAME}:4575`,
    sqs: `http://${process.env.LOCALSTACK_HOSTNAME}:4576`,
    redshift: `http://${process.env.LOCALSTACK_HOSTNAME}:4577`,
    es: `http://${process.env.LOCALSTACK_HOSTNAME}:4578`,
    ses: `http://${process.env.LOCALSTACK_HOSTNAME}:4579`,
    route53: `http://${process.env.LOCALSTACK_HOSTNAME}:4580`,
    cloudformation: `http://${process.env.LOCALSTACK_HOSTNAME}:4581`,
    cloudwatch: `http://${process.env.LOCALSTACK_HOSTNAME}:4582`,
    ssm: `http://${process.env.LOCALSTACK_HOSTNAME}:4583`,
    secretsmanager: `http://${process.env.LOCALSTACK_HOSTNAME}:4584`,
    stepfunctions: `http://${process.env.LOCALSTACK_HOSTNAME}:4585`,
    logs: `http://${process.env.LOCALSTACK_HOSTNAME}:4586`,
    events: `http://${process.env.LOCALSTACK_HOSTNAME}:4587`,
    elb: `http://${process.env.LOCALSTACK_HOSTNAME}:4588`,
    iot: `http://${process.env.LOCALSTACK_HOSTNAME}:4589`,
    sts: `http://${process.env.LOCALSTACK_HOSTNAME}:4592`,
    iam: `http://${process.env.LOCALSTACK_HOSTNAME}:4593`,
    rds: `http://${process.env.LOCALSTACK_HOSTNAME}:4594`,
    cloudsearch: `http://${process.env.LOCALSTACK_HOSTNAME}:4595`,
    swf: `http://${process.env.LOCALSTACK_HOSTNAME}:4596`
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