// @ts-nocheck

import { __deepMerge } from '@lotsof/sugar/object';
import type { IConfig, IConfigDefineSettings } from './types.js';

export default function defineConfig(
  config: IConfig,
  settings?: IConfigDefineSettings,
): any {
  if (settings?.defaults) {
    process.lotsofConfigDefaults = __deepMerge(
      process.lotsofConfigDefaults ?? {},
      config,
    );
    return process.lotsofConfigDefaults;
  } else {
    process.lotsofConfig = __deepMerge(process.lotsofConfig ?? {}, config);
    return process.lotsofConfig;
  }
}
