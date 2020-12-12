import core = require('@aws-cdk/core');
import { CfnJobTemplate } from '@aws-cdk/aws-mediaconvert';
import videoJobTemplateSettings from '../config/video_job_template';
import { MediaConvertPresets } from './media-convert-presets';

export interface MediaConvertJobTemplatesProps {
  readonly presets: MediaConvertPresets;
}

/**
 * This class captures all the templates that are defined for the MediaConvert stack.
 * Templates are used to make creating a job simpler, you don't need to specify all
 * fields of MediaConvert Job (in SDK) every time, just supplying the template name and runtime variables is enough
 *
 * A template applies to entire Job while a preset applies to a single output of the job.
 * Template also allows us to combine different presets as desired for different transcoding outputs.
 *
 * Documentation on working with presets:
 * https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-job-templates.html
 *
 * The settings of templates are stored in their own .json file and imported here
 * to be set within the template construct
 */
export class MediaConvertJobTemplates extends core.Construct {
  readonly defaultVideoJobTemplate: CfnJobTemplate;

  constructor(
    scope: core.Construct,
    id: string,
    props: MediaConvertJobTemplatesProps
  ) {
    super(scope, id);

    this.defaultVideoJobTemplate = new CfnJobTemplate(
      this,
      `DefaultVideoJobTemplate`,
      {
        settingsJson: videoJobTemplateSettings.Settings,
        category: videoJobTemplateSettings.Category,
        name: videoJobTemplateSettings.Name
      }
    );

    this.defaultVideoJobTemplate.addDependsOn(props.presets.thumbnailPreset);
    this.defaultVideoJobTemplate.addDependsOn(props.presets.defaultVideoPreset);
  }
}
