<template>
  <p>this is test page.</p>
  {{ store.currentUserName2 }}
  <button @click="setN">修改</button>
</template>

<script setup lang="ts">
import useUserStore from '../store/user';

const store = useUserStore();

const setN = store.setUserName;
</script>

<style lang="less" scoped></style>
