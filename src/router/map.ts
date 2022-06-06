import { RouteRecordRaw } from 'vue-router';

export const constRoutes: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试',
    },
    component: () => import('@/views/TestPage.vue'),
  },
];

export const syncRoutes: RouteRecordRaw[] = [];
