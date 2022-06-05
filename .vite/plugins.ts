import { PluginOption } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const plugins: PluginOption[] = [
  vue(),
  createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), '../src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
  }),
];

export default plugins;
