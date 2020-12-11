#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloMediaStack } from '../lib/hello-media-stack';

const app = new cdk.App();
new HelloMediaStack(app, 'HelloMediaStack');
