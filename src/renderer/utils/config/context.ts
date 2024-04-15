import { createContext, useContext } from 'react';
import { Config } from '.';

export const ConfigContext = createContext<Config | null>(null);

export function useConfig(): Config {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error('Config is not provided');
  }
  return config;
}
