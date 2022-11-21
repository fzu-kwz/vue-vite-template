<template>
  <main>
    <slot name="record"></slot>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import url(./index.less);
</style>
