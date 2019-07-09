[![Build Status](https://travis-ci.com/MatthewShortt/aws-node-elastic-beanstalk.svg?branch=master)](https://travis-ci.com/MatthewShortt/aws-node-elastic-beanstalk)
[![Coverage Status](https://coveralls.io/repos/github/MatthewShortt/aws-node-elastic-beanstalk/badge.svg?branch=master)](https://coveralls.io/github/MatthewShortt/aws-node-elastic-beanstalk?branch=master)
# AWS Elastic Beanstalk Express Sample API
This sample application uses the [Express](https://expressjs.com/) framework to build a simple, scalable RESTful API that is deployed to [AWS Elastic Beanstalk](http://aws.amazon.com/elasticbeanstalk/). The application stores data in [Amazon DynamoDB](http://aws.amazon.com/dynamodb/) and publishes notifications to the [Amazon Simple Notification Service (SNS)](http://aws.amazon.com/sns/).

The API can be found here: [API](http://tutorials-env.5g9mszefpn.us-east-2.elasticbeanstalk.com/)

## Local Development
To develop locally this project uses [LocalStack](https://github.com/localstack/localstack) to mock the various AWS services. For installation instructions please follow the installation guide: [Install LocalStack](https://github.com/localstack/localstack#installing). 

The configuration for these endpoints are handled in the [.env](./.env) file

### Available Scripts
In the project directory, you can run 

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

#### `npm test`
Launches the tests once. Unit tests are run with [Mocha](https://mochajs.org/) and [Sinon](https://sinonjs.org/releases/latest/).

#### `npm run test-watch`
Launches the tests in watch mode. 

#### `npm run coverage`
Launches the tests in coverage mode using [Instanbul](https://istanbul.js.org/). 

#### `npm run localstack`

Runs LocalStack. Spins up the mocked AWS services (eg. S3 can be found at [http://localhost:4572](http://localhost:4572))