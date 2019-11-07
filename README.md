# aws-alternative

AWS library wrapper that easily switches from localstack and actual AWS services.

## Why

If you develop software using AWS services or to be executed within a container
in EC2, ECS, or whatever, it is very likely that you first tried to test it
locally with LocalStack. Therefore, there are a few changes that you must do
in order to redirect all AWS SDK calls to your localstack instance instead of
AWS ones:

```javascript
  AWS.config.update({
    region: 'us-east-1',
    credentials: {
      accessKeyId: 'dummy-access-key',
      secretAccessKey: 'dummy-secret-key'
    },
    endpoint: 'http://192.168.240.1:4569'
  })
```

Everytime. For all services. Different ports for each service.

This is where this library might help. By using it, you could just enable
localstack by setting one environment variable and every service object is
properly configured. If you unset that environment variable, it will not perform
any configuration and the services your software will use are from AWS *with
no code changes*.

## How

If you'd like to use localstack, you should set `LOCALSTACK_ENABLED` environment
variable. This library doesn't care about which value it is, as long as it is
defined. For instance:

```bash
export LOCALSTACK_ENABLED=1
```

is enough to use localstack.

In your software, you must select which service object you need:

```javascript
// Create a SQS service object.
const sqs = require('aws-alternative')('sqs')

// Create a new DynamoDB object. This will be used to create a DocumentClient
// object
const dynamo = require('aws-alternative')('dynamodb')
const db = new AWS.DynamoDB.DocumentClient({service: dynamo})
```

## Known problems

I did not use every service available at AWS. There might be a few ones which
name is not correct. Feel free to fix them (doing so is not hard at all) and
I'd be more than happy to review your PR. Spread the love!.
