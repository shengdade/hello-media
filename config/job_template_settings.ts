const template = {
  Settings: {
    AdAvailOffset: 0,
    OutputGroups: [
      {
        Name: 'File Group',
        OutputGroupSettings: {
          Type: 'FILE_GROUP_SETTINGS',
          FileGroupSettings: {
            Destination: 's3://<destination-bucket>/'
          }
        },
        Outputs: [
          {
            VideoDescription: {
              ScalingBehavior: 'DEFAULT',
              TimecodeInsertion: 'DISABLED',
              AntiAlias: 'ENABLED',
              Sharpness: 50,
              CodecSettings: {
                Codec: 'H_264',
                H264Settings: {
                  InterlaceMode: 'PROGRESSIVE',
                  NumberReferenceFrames: 3,
                  Syntax: 'DEFAULT',
                  Softness: 0,
                  GopClosedCadence: 1,
                  GopSize: 90,
                  Slices: 1,
                  GopBReference: 'DISABLED',
                  SlowPal: 'DISABLED',
                  EntropyEncoding: 'CABAC',
                  FramerateControl: 'INITIALIZE_FROM_SOURCE',
                  RateControlMode: 'CBR',
                  CodecProfile: 'MAIN',
                  Telecine: 'NONE',
                  MinIInterval: 0,
                  AdaptiveQuantization: 'AUTO',
                  CodecLevel: 'AUTO',
                  FieldEncoding: 'PAFF',
                  SceneChangeDetect: 'ENABLED',
                  QualityTuningLevel: 'SINGLE_PASS',
                  FramerateConversionAlgorithm: 'DUPLICATE_DROP',
                  UnregisteredSeiTimecode: 'DISABLED',
                  GopSizeUnits: 'FRAMES',
                  ParControl: 'INITIALIZE_FROM_SOURCE',
                  NumberBFramesBetweenReferenceFrames: 2,
                  RepeatPps: 'DISABLED',
                  DynamicSubGop: 'STATIC'
                }
              },
              AfdSignaling: 'NONE',
              DropFrameTimecode: 'ENABLED',
              RespondToAfd: 'NONE',
              ColorMetadata: 'INSERT'
            },
            AudioDescriptions: [
              {
                AudioTypeControl: 'FOLLOW_INPUT',
                CodecSettings: {
                  Codec: 'AAC',
                  AacSettings: {
                    AudioDescriptionBroadcasterMix: 'NORMAL',
                    Bitrate: 96000,
                    RateControlMode: 'CBR',
                    CodecProfile: 'LC',
                    CodingMode: 'CODING_MODE_2_0',
                    RawFormat: 'NONE',
                    SampleRate: 48000,
                    Specification: 'MPEG4'
                  }
                },
                LanguageCodeControl: 'FOLLOW_INPUT'
              }
            ],
            ContainerSettings: {
              Container: 'MP4',
              Mp4Settings: {
                CslgAtom: 'INCLUDE',
                CttsVersion: 0,
                FreeSpaceBox: 'EXCLUDE',
                MoovPlacement: 'PROGRESSIVE_DOWNLOAD',
                AudioDuration: 'DEFAULT_CODEC_DURATION'
              }
            },
            NameModifier: '-converted'
          }
        ],
        CustomName: 'OutputGroups'
      },
      {
        Name: 'File Group',
        OutputGroupSettings: {
          Type: 'FILE_GROUP_SETTINGS',
          FileGroupSettings: {
            Destination: 's3://<destination-bucket>/'
          }
        },
        Outputs: [
          {
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
                  MaxCaptures: 10000000,
                  Quality: 80
                }
              },
              DropFrameTimecode: 'ENABLED',
              ColorMetadata: 'INSERT',
              Width: 1280,
              Height: 720
            },
            ContainerSettings: {
              Container: 'RAW'
            },
            NameModifier: '-poster'
          }
        ],
        CustomName: 'Poster'
      }
    ],
    TimecodeConfig: {
      Source: 'ZEROBASED'
    },
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
    ]
  },
  Name: 'HelloMediaTemplate'
};

export const getJobTemplate = (bucketName: string) =>
  JSON.parse(
    JSON.stringify(template).replace(/<destination-bucket>/g, bucketName)
  );
