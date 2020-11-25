<!-- =========================================================================================
     File Name: PrescriptionItem
     Description: 處方組件
     Component Name: PrescriptionItem
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-25 22:43:07
     Change time:  2020-11-25 22:43:07
========================================================================================== -->
<template>
  <div class="PrescriptionItem">
    <div class="item-box">
      <!-- 頭部 -->
      <div class="header">
        處方{{ index }}
        <span class="type">({{ getType }})</span>
        <div class="btn-box">
          <el-button>隱藏</el-button>
          <el-button>修改</el-button>
          <el-button>刪除</el-button>
        </div>
      </div>
      <!-- 處方内容 -->
      <div class="content">
        <!-- 飲片處方 -->
        <div v-if="PrescriptionType === 1">飲片處方</div>
        <!-- 飲片處方 -->
        <div v-if="PrescriptionType === 2">成藥處方</div>
        <!-- 飲片處方 -->
        <div v-if="PrescriptionType === 3">針灸處方</div>
        <!-- 飲片處方 -->
        <div v-if="PrescriptionType === 4">免煎中藥</div>
      </div>
      <!-- 底部 -->
      <div class="fotter">
        <el-button>存爲自定義處方</el-button>
        <el-button>保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrescriptionItem',
  data () {
    return {}
  },
  computed: {
    getType () {
      let result
      console.log('this.PrescriptionType', this.PrescriptionType)
      switch (this.PrescriptionType) {
        case 1:
          result = '飲片'
          break
        case 2:
          result = '成藥'
          break
        case 3:
          result = '針灸'
          break
        case 4:
          result = '免煎中藥'
          break
      }
      console.log('getType', result)
      return result
    }
  },
  props: {
    PrescriptionType: {
      type: [Number],
      default: 1 // 處方類型 1 飲片 2 成藥 3 針灸 4 免煎中藥
    },
    index: {
      type: [Number, String],
      default: '一'
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.PrescriptionItem {
  .item-box {
    padding: 17px;
    background: rgba(36, 114, 255, 0.04);
    .header {
      position: relative;
      margin-bottom: 35px;
      text-align: center;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 26px;
      .type {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 26px;
      }
      .btn-box {
        position: absolute;
        right: 0;
        top: -4px;
      }
    }
    .fotter {
      @include flex-center(flex-end);
      margin-top: 30px;
    }
  }
}
</style>
