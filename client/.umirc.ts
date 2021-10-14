import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    devServerRender: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/product', component: '@/pages/product/index' },
    { path: '/product_csr', component: '@/pages/product/index_csr' },
  ],
  fastRefresh: {},
  proxy: {
    '/cgi': {
      'target': 'https://wemake.tencent.com',
      'changeOrigin': true,
    },
  },
});
