<template>
  <div class="fs-menu">
    <!-- default-active="2"  class="el-menu-vertical-demo"-->
    <el-menu
      :default-active="$route.path"
      :router="true"
      :unique-opened="true"
      background-color="#222631"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>医师</span>
        </template>
        <el-menu-item index="home">医师工作台</el-menu-item>
        <el-menu-item index="subscribe">门诊预约</el-menu-item>
        <el-menu-item index="1-3">门诊回顾</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">患者中心</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>门诊协作</span>
        </template>
        <el-menu-item index="3-1">会诊</el-menu-item>
        <el-menu-item index="3-2">转诊</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">资源管理</span>
      </el-menu-item>
      <el-menu-item index="4">
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
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.fs-menu {
  width: 200px;
  height: 100vh;
}
</style>
