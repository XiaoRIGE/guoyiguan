<!-- =========================================================================================
     File Name: acupuncture
     Description: 针灸管理
     Component Name: acupuncture
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:38:02
     Change time:  2020-10-26 20:38:02
========================================================================================== -->
<template>
  <div class="acupuncture">
    <div class="search-box">
      <el-form ref="form" :model="form" label-width="40px">
        <el-row class="row" :gutter="20">
          <el-col :span="3">
            <el-form-item label="名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="类型">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="疾病">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="疗程">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="功效">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <div class="btn-box">
              <el-button >查询</el-button>
              <el-button type="primary">新增处方</el-button>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="btn-box">
              <el-button >申请记录</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'acupuncture',
  data () {
    return {
      form: {
        name: '',
        region: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.acupuncture {
  height: calc(100vh - 136px);
  overflow: auto;
  width: 100%;
  background: #ffffff;
  .search-box {
    padding: 28px 30px 0;
    .row {
      box-sizing: border-box;
      width: 100%;
    }
  }
}
</style>
