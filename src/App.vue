<template>
  <div class="app">
    <!-- <h1>入口页面</h1> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>