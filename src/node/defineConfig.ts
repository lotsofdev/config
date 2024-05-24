// @ts-nocheck

import { __deepMerge } from '@lotsof/sugar/object';
import { IConfig } from './types.js';

export default function defineConfig(config: IConfig): any {
  process.lotsofConfig = __deepMerge(process.lotsofConfig ?? {}, config);
  return process.lotsofConfig;
}
