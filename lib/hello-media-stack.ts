import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import { S3EventSource } from '@aws-cdk/aws-lambda-event-sources';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { MediaConvertJobTemplates } from './media-convert-job-templates';
import { MediaConvertPresets } from './media-convert-presets';

export class HelloMediaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'MediaBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const presets = new MediaConvertPresets(this, `Presets`);

    const template = new MediaConvertJobTemplates(this, `JobTemplates`, {
      presets: presets
    });

    const mediaConvertRole = new iam.Role(this, `MediaConvertRole`, {
      roleName: 'DefaultMediaConvertRole',
      assumedBy: new iam.ServicePrincipal('mediaconvert.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess')
      ]
    });

    const handler = new lambda.Function(this, 'MediaConvertHandler', {
      functionName: 'MediaConvert',
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
      environment: {
        bucket: bucket.bucketName,
        endpoint: 'https://4l8tgbpha.mediaconvert.us-west-2.amazonaws.com',
        jobTemplate: template.defaultVideoJobTemplate.name!,
        mediaConvertRole: mediaConvertRole.roleArn
      },
      events: [
        new S3EventSource(bucket, {
          events: [s3.EventType.OBJECT_CREATED]
        })
      ]
    });

    const handlerPolicy = new iam.PolicyStatement({
      actions: ['mediaconvert:*', 'iam:PassRole'],
      resources: ['*']
    });

    handler.addToRolePolicy(handlerPolicy);
  }
}
