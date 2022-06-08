import { RouteRecordRaw } from 'vue-router';

export const constRoutes: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试',
    },
    component: () => import('@/views/Test.vue'),
  },
];

export const syncRoutes: RouteRecordRaw[] = [];
