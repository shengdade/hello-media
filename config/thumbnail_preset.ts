export default {
  Name: 'DefaultThumbnailPreset',
  Category: 'HELLO-MEDIA-DEFAULTS',
  Description:
    'A default frame capture to represent thumbnail image of a video',
  Settings: {
    VideoDescription: {
      ScalingBehavior: 'DEFAULT',
      TimecodeInsertion: 'DISABLED',
      AntiAlias: 'ENABLED',
      Sharpness: 50,
      CodecSettings: {
        Codec: 'FRAME_CAPTURE',
        FrameCaptureSettings: {
          FramerateNumerator: 1,
          FramerateDenominator: 5,
          MaxCaptures: 2,
          Quality: 80
        }
      },
      DropFrameTimecode: 'ENABLED',
      ColorMetadata: 'INSERT'
    },
    ContainerSettings: {
      Container: 'RAW'
    }
  }
};
