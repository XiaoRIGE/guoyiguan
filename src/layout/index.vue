<template>
  <div class="layout">
    <FsHeader></FsHeader>
    <div class="container">
      <FsMenu></FsMenu>
      <div class="content">
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
    }
}
</style>
