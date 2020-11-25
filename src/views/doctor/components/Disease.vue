<!-- =========================================================================================
     File Name: disease
     Description: 病症信息組件
     Component Name: disease
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-25 22:43:07
     Change time:  2020-11-25 22:43:07
========================================================================================== -->
<template>
  <div class="disease">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="主訴">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="現病史">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="檢查">
        <el-input v-model="form.check"></el-input>
      </el-form-item>
      <!-- todo  寫文件上傳組件 -->
      <el-form-item label="圖片">
        <el-button class="upload-btn">
          <img src="../../../assets/image/icon-upload.png" class="upload-icon">
          上传</el-button>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="舌相">
            <el-input v-model="form.she"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="脈相">
            <el-input v-model="form.mai"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="圖片">
        <el-button class="upload-btn">
          <img src="../../../assets/image/icon-upload.png" class="upload-icon">
          上传</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'disease',
  data () {
    return {
      form: {
        name: '',
        desc: '',
        check: '',
        she: '',
        mai: ''
      }
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.disease {
}
</style>
