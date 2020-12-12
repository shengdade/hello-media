const AWS = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const s3Key = event.Records[0].s3.object.key;

  // Avoid infinite call for converted medias
  if (s3Key.match(/output/gi)) return;

  const [destination = ''] = s3Key.match(/.*\//) || [];

  const MediaConvert = new AWS.MediaConvert({
    apiVersion: '2017-08-29',
    endpoint: process.env.endpoint
  });

  const Height = 720;
  const Width = 1280;

  const OutputGroups = {
    Outputs: [
      {
        VideoDescription: {
          Height,
          Width
        }
      }
    ],
    OutputGroupSettings: {
      FileGroupSettings: {
        // Use env variable to set the bucket
        Destination: `s3://${process.env.bucket}/output/${destination}`
      }
    }
  };

  await MediaConvert.createJob({
    Role: process.env.mediaConvertRole,
    JobTemplate: process.env.jobTemplate,
    Settings: {
      Inputs: [
        {
          FileInput: `s3://${process.env.bucket}/${s3Key}`
        }
      ],
      // First one for screenshot, second one for video
      OutputGroups: [OutputGroups, OutputGroups]
    }
  }).promise();

  callback(null, event);
};
