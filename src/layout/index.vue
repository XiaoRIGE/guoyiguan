<template>
  <div class="layout">
    <div class="container">
      <FsMenu></FsMenu>
      <div class="content">
        <FsHeader></FsHeader>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import FsMenu from './components/FsMenu'
import FsHeader from './components/FsHeader'
export default {
  name: 'layout',
  components: { FsMenu, FsHeader },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.layout {
  .container {
    display: flex;
    .content {
      box-sizing: border-box;
      padding: 0 40px;
      width: 100%;
      background: #f0f3f8;
    }
  }
}
</style>
