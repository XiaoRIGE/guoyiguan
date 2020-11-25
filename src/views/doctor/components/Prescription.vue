<!-- =========================================================================================
     File Name: Prescription
     Description: 處方組件
     Component Name: Prescription
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-25 22:43:07
     Change time:  2020-11-25 22:43:07
========================================================================================== -->
<template>
  <div class="Prescription">
    <el-card class="box-card mb-20">
      <div slot="header" class="clearfix">
        <el-form ref="form" :model="form">
          <el-row :gutter="20">
            <el-col :span="2"><p class="title">處方</p></el-col>
            <el-col :span="2">
              <el-form-item>
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="飲片" value="a"></el-option>
                  <el-option label="免煎中藥" value="b"></el-option>
                  <el-option label="針灸" value="c"></el-option>
                  <el-option label="成藥" value="d"></el-option>
                  <el-option label="健康食品" value="e"></el-option>
                  <el-option label="健康用品" value="f"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-button>新增處方</el-button>
            </el-col>
            <el-col :span="4">
              <el-form-item>
                <el-form-item>
                  <el-input
                    v-model="form.name"
                    placeholder="請輸入拼音簡碼"
                  ></el-input>
                </el-form-item>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button type="primary">保存所有處方</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <PrescriptionItem :PrescriptionType="index+1" v-for="(item,index) in 4" :key="index" class="mb-10"></PrescriptionItem>
    </el-card>
  </div>
</template>

<script>
import PrescriptionItem from '../components/PrescriptionItem'
export default {
  name: 'Prescription',
  components: { PrescriptionItem },
  data () {
    return {
      form: {
        region: 'a'
      },
      list: []
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Prescription {
  .clearfix {
    .title {
      line-height: 36px;
      font-size: 18px;
      font-family: PingFangTC-Light, PingFangTC;
      font-weight: 300;
      color: #000000;
    }
    .el-form-item {
      margin-bottom: 0;
    }
  }
}
</style>
