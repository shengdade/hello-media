export default {
  Name: 'DefaultVideoPreset',
  Category: 'HELLO-MEDIA-DEFAULTS',
  Description: 'A default video preset settings to transcoded an input video',
  Settings: {
    VideoDescription: {
      ScalingBehavior: 'DEFAULT',
      VideoPreprocessors: {
        Deinterlacer: {
          Algorithm: 'INTERPOLATE',
          Mode: 'DEINTERLACE',
          Control: 'NORMAL'
        }
      },
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
          SpatialAdaptiveQuantization: 'ENABLED',
          TemporalAdaptiveQuantization: 'ENABLED',
          FlickerAdaptiveQuantization: 'DISABLED',
          EntropyEncoding: 'CABAC',
          Bitrate: 3000000,
          FramerateControl: 'INITIALIZE_FROM_SOURCE',
          RateControlMode: 'CBR',
          CodecProfile: 'MAIN',
          Telecine: 'NONE',
          MinIInterval: 0,
          AdaptiveQuantization: 'HIGH',
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
        AudioSourceName: 'Audio Selector 1',
        CodecSettings: {
          Codec: 'AAC',
          AacSettings: {
            AudioDescriptionBroadcasterMix: 'NORMAL',
            Bitrate: 160000,
            RateControlMode: 'CBR',
            CodecProfile: 'LC',
            CodingMode: 'CODING_MODE_2_0',
            RawFormat: 'NONE',
            SampleRate: 48000,
            Specification: 'MPEG4'
          }
        },
        LanguageCodeControl: 'FOLLOW_INPUT',
        AudioType: 0
      }
    ],
    ContainerSettings: {
      Container: 'MP4',
      Mp4Settings: {
        CslgAtom: 'INCLUDE',
        FreeSpaceBox: 'EXCLUDE',
        MoovPlacement: 'PROGRESSIVE_DOWNLOAD'
      }
    }
  }
};
