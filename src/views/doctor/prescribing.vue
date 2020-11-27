<!-- =========================================================================================
     File Name: Prescribing
     開處方ription: 開處方
     Component Name: Prescribing
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-25 22:30:25
     Change time:  2020-11-25 22:30:25
========================================================================================== -->
<template>
  <div class="Prescribing">
    <!-- <h1>開處方</h1> -->
    <!-- todo 隱藏菜單欄功能 -->
    <el-row :gutter="20">
      <el-col :span="17">
        <!-- 病症信息 -->
        <el-card class="box-card mb-20">
          <div slot="header" class="clearfix">
            <span>病症信息</span>
          </div>
          <Disease></Disease>
        </el-card>
        <!-- 診斷 -->
        <el-card class="box-card mb-20">
          <div slot="header" class="clearfix">
            <span>診斷</span>
          </div>
          <Diagnosis></Diagnosis>
        </el-card>
        <!-- 處方 -->

          <Prescription></Prescription>
      </el-col>
      <el-col :span="7">
        <!-- 既往病例 -->
          <Currency class="mb-20"></Currency>
        <!-- 收費明細 -->
        <Expenses></Expenses>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import Disease from './components/Disease'
import Diagnosis from './components/Diagnosis'
import Prescription from './components/Prescription'
import Expenses from './components/Expenses'
import Currency from './components/Currency'

export default {
  name: 'Prescribing',
  components: { Disease, Diagnosis, Prescription, Expenses, Currency },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Prescribing {
  .el-card__header {
    .clearfix {

font-size: 18px;
font-family: PingFangTC-Light, PingFangTC;
font-weight: 500;
color: #000000;
    }
  }
}
</style>
