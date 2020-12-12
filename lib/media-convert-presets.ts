import core = require('@aws-cdk/core');
import { CfnPreset } from '@aws-cdk/aws-mediaconvert';
import thumbnailPresetSettingsJson from '../config/thumbnail_preset';
import videoPresentSettingsJson from '../config/video_preset';

/**
 * This class captures all the presets that are defined for the MediaConvert stack.
 * Presets are used to make creating a job simpler, you don't need to specify all
 * fields of MediaConvert OutputSettings (in SDK) every time, just supplying the preset name is enough.
 *
 * Documentation on working with presets:
 * https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-presets.html
 *
 * The settings of presets are stored in their own .json file and imported here
 * to be set within the preset construct
 */
export class MediaConvertPresets extends core.Construct {
  readonly thumbnailPreset: CfnPreset;
  readonly defaultVideoPreset: CfnPreset;

  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    const thumbnailPresetName = 'DefaultSingleThumbnailPreset';
    this.thumbnailPreset = new CfnPreset(this, `${id}-${thumbnailPresetName}`, {
      description: thumbnailPresetSettingsJson.Description,
      category: thumbnailPresetSettingsJson.Category,
      name: thumbnailPresetSettingsJson.Name,
      settingsJson: thumbnailPresetSettingsJson.Settings
    });

    const defaultVideoPreset = 'DefaultVideoPreset';
    this.defaultVideoPreset = new CfnPreset(
      this,
      `${id}-${defaultVideoPreset}`,
      {
        description: videoPresentSettingsJson.Description,
        category: videoPresentSettingsJson.Category,
        name: videoPresentSettingsJson.Name,
        settingsJson: videoPresentSettingsJson.Settings
      }
    );
  }
}
