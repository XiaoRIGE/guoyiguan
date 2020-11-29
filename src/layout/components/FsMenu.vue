<template>
  <div class="fs-menu">
    <img src="../../assets/image/x-logo.png" class="logo" />
    <!-- default-active="2"  class="el-menu-vertical-demo"-->
    <!-- #268CFF  #F9FBFF-->
    <!-- background-color="#268CFF" -->
    <el-menu
      :default-active="activeName"
      :router="false"
      :unique-opened="true"
      text-color="#74b4ff"
      active-text-color="#268CFF"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医师</span>
        </template>
        <el-menu-item index="home">医师工作台</el-menu-item>
        <el-menu-item index="subscribe">门诊预约</el-menu-item>
        <el-menu-item index="review">门诊回顾</el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="patientCenter">
        <span slot="title"> <i class="el-icon-menu"></i>患者中心</span>
      </el-submenu> -->
      <el-menu-item index="patientCenter">
        <i class="el-icon-menu"></i>
        <span slot="title">患者中心</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>门诊协作</span>
        </template>
        <el-menu-item index="consultation">会诊</el-menu-item>
        <el-menu-item index="referral">转诊</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <svg-icon name="message"></svg-icon>
          <span>资源管理</span>
        </template>
        <el-menu-item index="prescription">中草药方剂管理</el-menu-item>
        <el-menu-item index="acupuncture">针灸管理</el-menu-item>
        <el-menu-item index="product">成品管理</el-menu-item>
        <el-menu-item index="herbal">中草藥管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="setting">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
      <el-menu-item index="chat">
        <i class="el-icon-setting"></i>
        <span slot="title">聊天室</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'fs-menu',
  data () {
    return {
      activeNames: ['1']
    }
  },
  computed: {
    activeName: function () {
      console.log('==', this.$route.name)
      return this.$route.name
    }
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, 'key')
      console.log('keyPath', keyPath)
      this.$router.push({ name: key })
    }
  }
}
</script>

<style lang="scss" scoped>
.fs-menu {
  padding-left: 10px;
  // width: 200px;
  height: 100vh;
  width: 302px;
  // height: 2250px;
  background: linear-gradient(140deg, #0e7ffe 0%, #0d74e5 100%);
  .logo {
    width: 200px;
    @include h-center();
    margin-top: 70px;
    margin-bottom: 38px;
  }
}
::v-deep {
  .is-active {
    background: #fff !important;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .el-menu,
  .el-menu-item {
    background: transparent !important;
  }
  .el-menu .el-menu--inline {
    border-bottom-left-radius: 20px;
    background-color: #fff !important;
  }
  // 展开菜单
  .is-opened {
    div,
    li {
      background: #fff !important;
      // color: #268CFF!important;
    }
    .el-submenu__title {
      border-radius: 20px 0 0 0;
    }
    li:nth-last-child(1) {
      border-radius: 0 0 0 20px;
    }
  }
}
</style>
