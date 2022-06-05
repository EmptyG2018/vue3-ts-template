import { UserConfig, ConfigEnv } from 'vite';
import plugins from './.vite/plugins';
import resolve from './.vite/resolve';
import server from './.vite/server';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    plugins,
    resolve,
    server,
  };
};
