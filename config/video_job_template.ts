export default {
  Name: 'DefaultVideoJobTemplate',
  Category: 'HELLO-MEDIA-DEFAULTS',
  Settings: {
    TimecodeConfig: {
      Source: 'ZEROBASED'
    },
    OutputGroups: [
      {
        CustomName: 'Thumbnails',
        Name: 'File Group',
        Outputs: [
          {
            Preset: 'DefaultThumbnailPreset',
            Extension: 'jpg'
          }
        ],
        OutputGroupSettings: {
          Type: 'FILE_GROUP_SETTINGS',
          FileGroupSettings: {}
        }
      },
      {
        CustomName: 'Videos',
        Name: 'File Group',
        Outputs: [
          {
            Preset: 'DefaultVideoPreset',
            Extension: 'mp4',
            NameModifier: '-1'
          }
        ],
        OutputGroupSettings: {
          Type: 'FILE_GROUP_SETTINGS',
          FileGroupSettings: {}
        }
      }
    ],
    Inputs: [
      {
        FilterEnable: 'AUTO',
        PsiControl: 'USE_PSI',
        FilterStrength: 0,
        DeblockFilter: 'DISABLED',
        DenoiseFilter: 'DISABLED',
        InputScanType: 'AUTO',
        TimecodeSource: 'ZEROBASED',
        VideoSelector: {
          ColorSpace: 'FOLLOW',
          Rotate: 'DEGREE_0',
          AlphaBehavior: 'DISCARD'
        },
        AudioSelectors: {
          'Audio Selector 1': {
            Offset: 0,
            DefaultSelection: 'DEFAULT',
            ProgramSelection: 1
          }
        }
      }
    ],
    AdAvailOffset: 0
  },
  AccelerationSettings: {
    Mode: 'DISABLED'
  },
  StatusUpdateInterval: 'SECONDS_60',
  Priority: 0,
  HopDestinations: []
};
