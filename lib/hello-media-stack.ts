import * as mediaconvert from '@aws-cdk/aws-mediaconvert';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { getJobTemplate } from '../config/job_template_settings';

export class HelloMediaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'MediaBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const template = getJobTemplate(bucket.bucketName);
    const jobTemplate = new mediaconvert.CfnJobTemplate(this, 'JobTemplate', {
      settingsJson: template.Settings,
      name: template.Name
    });
  }
}
