<!-- =========================================================================================
     File Name: herbalDetail
     Description: 中草藥詳情
     Component Name: herbalDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-28 22:20:36
     Change time:  2020-11-28 22:20:36
========================================================================================== -->
<template>
  <div class="herbalDetail">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>中草藥詳情</span>
      </div>
      <el-row>
        <el-col :span="4">
          <p>
            <span class="label">中草藥名稱</span>
            <span class="value">xxxxxxxxxxxxxxxxx</span>
          </p>
        </el-col>
        <p>
          <span class="label">拼音簡碼</span>
          <span class="value">xxxxxxxxxxxxxxxxx</span>
        </p>
        <el-col :span="4">
          <p>
            <span class="label">中草藥分類</span>
            <span class="value">xxxxxxxxxxxxxxxxx</span>
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <p>
            <span class="label">品種</span>
            <span class="value">xxxxxxxxxxxxxxxxx</span>
          </p>
        </el-col>
        <el-col :span="4">
          <p>
            <span class="label">拼音簡碼</span>
            <span class="value">xxxxxxxxxxxxxxxxx</span>
          </p>
        </el-col>
      </el-row>
      <p>
        <span class="label">怪味歸經</span>
        <span class="value">xxxxxxxxxxxxxxxxx</span>
      </p>
      <p>
        <span class="label">臨床應用</span>
        <span class="value">xxxxx</span>
      </p>
      <p>
        <span class="label">用法用量</span>
        <span class="value">xxxxxxxxxxxxxxxxx</span>
      </p>
      <p>
        <span class="label">注意事項</span>
        <span class="value">xxxxxxxxxxxxxxxxx</span>
      </p>
      <div class="name">可治療的疾病</div>
      <span>xxxxx</span>
      <span>xxxxx</span>
      <span>xxxxx</span>
      <div class="name">可治療的症侯</div>
      <span>xxxxx</span>
      <span>xxxxx</span>
      <span>xxxxx</span>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'herbalDetail',
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.herbalDetail {
  p {
    margin-bottom: 16px;
    .label {
      display: inline-block;
      width: 90px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 22px;
    }
    .value {
      font-size: 14px;
      font-family: HelveticaNeue;
      color: #333333;
      line-height: 22px;
    }
  }
  .name {
    margin-bottom: 15px;
    margin-top: 15px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 22px;
  }
}
</style>
