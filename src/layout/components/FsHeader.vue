<template>
  <div class="fs-header">
    <h1 class="left">国医馆医师端logo</h1>
    <div class="right">
      <div>消息logo</div>
      <div class="user-info">
        <img
          class="avator"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2625008281,94811485&fm=26&gp=0.jpg"
        />
        <span>王医师</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fs-header",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
        display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .avator {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
}
</style>