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
      <el-col :span="18">
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
      <el-col :span="6">
        <!-- 既往病例 -->
        <el-card class="box-card mb-20">
          <div slot="header" class="clearfix">
            <span>既往病例</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
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

export default {
  name: 'Prescribing',
  components: { Disease, Diagnosis, Prescription, Expenses },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Prescribing {
}
</style>
