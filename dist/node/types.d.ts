import type { IDocmapConfig } from '@lotsof/docmap';
import type { IComponentsSettings } from '@lotsof/cli';
export interface IConfigDefineSettings {
    defaults: boolean;
}
export interface IConfig {
    components?: IComponentsSettings;
    docmap?: IDocmapConfig;
}
