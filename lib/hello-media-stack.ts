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

    let presets = new MediaConvertPresets(this, `${id}-MediaConvertPresets`);

    new MediaConvertJobTemplates(this, `${id}-MediaConvertJobTemplates`, {
      presets: presets
    });
  }
}
