
export enum AwsService {
    apigateway,
    kinesis,
    dynamodb,
    dynamodbstreams,
    elasticsearch,
    s3,
    firehose,
    lambda,
    sns,
    sqs,
    redshift,
    es,
    ses,
    route53,
    cloudformation,
    cloudwatch,
    ssm,
    secretsmanager,
    stepfunctions,
    logs,
    events,
    elb,
    iot,
    sts,
    iam,
    rds,
    cloudsearch,
    swf
}

export default (service: AwsService, params: any) => any;