<template>
  <div class="layout">
    <div class="container">
      <FsMenu></FsMenu>
      <div class="content">
        <FsHeader></FsHeader>
        <div v-if="parentInfo.parent" class="nav-title mb-40">
          <!-- 方案1 新跳转页面 -->
          <span @click="goRouter(parentInfo.parent)" class="gray cursor">{{
            parentInfo.parentName
          }}</span
          >/ <span>{{ parentInfo.title }}</span>
          <!-- 方案二 返回上一级 优先使用第二种 方便使用缓存 -->
          <!-- <el-page-header @back="goBack" :content="parentInfo.parentName+'/'+parentInfo.title">
          </el-page-header> -->
        </div>
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
  },

  computed: {
    // 当前路由meta信息
    parentInfo: function () {
      return this.$route.meta
    }
  },
  methods: {
    goRouter (name) {
      this.$router.push(name)
    },
    goBack () {
      this.$router.back()
    }
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
      .nav-title {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        .gray {
          color: #999999;
        }
      }
    }
  }
}
</style>
