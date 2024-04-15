#!/usr/bin/env node

import cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack.js';

const app = new cdk.App();

new InfrastructureStack(app, 'BucketStack', {
    websiteDeployment: false,
});
new InfrastructureStack(app, 'WebsiteStack', {
    websiteDeployment: true,
});
