/**
 * @file aws.js
 * 
 * Wrapper for AWS SDK
 * 
 * This module will properly configure any AWS service changing its endpoint if
 * needed.
 */
const aws = require('aws-sdk')
const awsServices = require('./aws-services')
const region = process.env.AWS_DEFAULT_REGION ? process.env.AWS_DEFAULT_REGION : 'sa-east-1'

module.exports = (service, params) => {
  if (service in awsServices.endpoints) {
    return new aws[awsServices.names[service]]({
      endpoint: awsServices.endpoints[service],
      region,
      ...params
    })
  } else {
    return new aws[awsServices.names[service]]({region, ...params})
  }
}
