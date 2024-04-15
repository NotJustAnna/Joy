import { Config as MainConfig, Item as MainItem } from '../../../main/Config';

export type Config = MainConfig;
export type Item = MainItem;

export function parseConfig(json: string): Config {
  return JSON.parse(json) as Config;
}
