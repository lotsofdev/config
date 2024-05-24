// @ts-nocheck

import { __get } from '@lotsof/sugar/object';

export default function getConfig(path?: string, def?: any): any {
  if (!process.lotsofConfig) {
    throw new Error(
      'Config not loaded. Please call the loadConfig function before trying to get a config value',
    );
  }

  if (path) {
    console.log(path);

    return __get(process.lotsofConfig ?? {}, path) ?? def;
  }
  return process.lotsofConfig ?? {};
}
