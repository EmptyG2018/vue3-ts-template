import { ServerOptions } from 'vite';
const server: ServerOptions = {
  port: 8888,
  host: '0.0.0.0',
  proxy: {
    '/proxy': {
      // target: 'http://106.52.183.51:9191',
      target: 'http://192.168.31.114',
      // target: 'https://gxw.meixioa.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/\/proxy/, '/api'),
    },
  },
};

export default server;
