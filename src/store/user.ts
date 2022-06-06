import { defineStore } from 'pinia';

export default defineStore('user', {
  state: () => ({
    username: '张三',
    counter: 0,
  }),
  getters: {
    currentUserName(state) {
      return `我是${state.username}`;
    },
    currentUserName2() {
      return `你${this.currentUserName}`;
    },
  },
  actions: {
    setUserName() {
      this.username = '李四';
    },
  },
});
