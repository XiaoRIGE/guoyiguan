<template>
  <div class="fs-header">
    <div class="info">
      <div class="icon-box">
        <!-- <svg-icon class="icon" name="message"></svg-icon> -->
        <el-badge is-dot class="item">
          <img src="../../assets/image/icon-message.png" class="icon" />
        </el-badge>

        <!-- <span class="point"></span> -->
      </div>
      <img
        class="avator"
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=202760600,1268422708&fm=11&gp=0.jpg"
      />
    </div>
    <!-- demo -->
    <!-- <h1 class="left">国医馆医师端logo</h1>
    <div class="right">
      <div>消息logo</div>
      {{$t("common.home")}}
      {{$t("message.hint1")}}
      <span @click="changeLanguage">切换语言</span>
      <div class="user-info">
        <img
          class="avator"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2625008281,94811485&fm=26&gp=0.jpg"
        />
        <span>王医师</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'fs-header',
  data () {
    return {}
  },
  methods: {
    changeLanguage () {
      const lang = this.$i18n.locale === 'zh' ? 'tw' : 'zh'
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss" scoped>
.fs-header {
  .info {
    box-sizing: border-box;
    padding: 20px 76px 20px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .icon-box {
    position: relative;
    margin-right: 46px;
    .icon {
      width: 30px;
    }
    .point {
      position: absolute;
      right: 4px;
      top: 2px;
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: red;
    }
  }
  .avator {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // .left {
  // }
  // .right {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   .user-info {
  //       display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   }
  //   .avator {
  //     width: 80px;
  //     height: 80px;
  //     border-radius: 50%;
  //   }
  // }
}
</style>
