<!-- =========================================================================================
     File Name: Diagnosis
     Description: 診斷信息組件
     Component Name: Diagnosis
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-25 22:43:07
     Change time:  2020-11-25 22:43:07
========================================================================================== -->
<template>
  <div class="Diagnosis">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="19">
          <el-form-item label="疾病">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="是否懷孕">
            <el-radio-group v-model="form.resource">
              <el-radio label="shi">是</el-radio>
              <el-radio label="fou">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="症形">
        <el-input v-model="form.status"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="治则治法">
            <el-input v-model="form.waht"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="其他">
            <el-input v-model="form.other"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Diagnosis',
  data () {
    return {
      form: {
        name: '',
        resource: 'fou',
        status: '',
        waht: '',
        other: ''
      }
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Diagnosis {
}
</style>
