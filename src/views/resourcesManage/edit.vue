<!-- =========================================================================================
     File Name: edit
     Description: 編輯處方
     Component Name: edit
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-28 17:14:05
     Change time:  2020-11-28 17:14:05
========================================================================================== -->
<template>
  <div class="edit">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>處方編輯</span>
      </div>
      <el-form :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="處方">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="類型">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="處方名称" class="w-600">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="疾病">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="症侯">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="功效">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用法用量" class="w-600">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="臨床應用" class="w-600">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="注意事項" class="w-600">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <!-- 處方 -->
        <el-form-item>
          <el-form ref="form" :model="myform" class="mb-20">
            <el-row :gutter="20">
              <el-col :span="3">
                <el-form-item>
                  <el-select v-model="myform.region" placeholder="请选择">
                    <el-option label="飲片" value="a"></el-option>
                    <el-option label="免煎中藥" value="b"></el-option>
                    <el-option label="針灸" value="c"></el-option>
                    <el-option label="成藥" value="d"></el-option>
                    <el-option label="健康食品" value="e"></el-option>
                    <el-option label="健康用品" value="f"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="myform.name"
                      placeholder="請輸入拼音簡碼"
                    ></el-input>
                  </el-form-item>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-radio-group v-model="myform.resource">
                  <el-radio label="g"></el-radio>
                  <el-radio label="錢"></el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-form>
          <div class="info-box">
            <div class="common-base">
            <div
              v-for="(item, index) in mianjian"
              :key="index"
              class="item mr-30 mb-16"
            >
              <p class="head">
                <span>少商</span>
                <svg-icon class="cursor" name="delete"></svg-icon>
              </p>
              <el-form label-width="40px">
                <el-row :gutter="4" class="mb-4 center-row">
                  <el-col :span="20" class="mb-4">
                    <el-form-item label="用量">
                      <el-input v-model="item.usenum">
                        <span slot="append">g</span>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <span class="inblock">1:5</span>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                  <el-col :span="12">
                    <el-checkbox v-model="item.forown">自备</el-checkbox>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <!-- 計量用法 -->
          <div class="use-method">
            <el-form label-width="40px">
              <el-row :gutter="40">
                <el-col :span="4">
                  <el-form-item label="劑量">
                    <el-input v-model="form.usenum2">
                      <span slot="append">總 16g</span>
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          </div>

        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存</el-button>
          <el-button type="primary">保存並提交申請</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      form: {
        region: '',
        name: ''
      },
      myform: {
        region: '',
        name: '',
        resource: ''
      },
      // 免煎中藥
      mianjian: [
        { usenum: 1, forown: true },
        { usenum: 1, forown: true },
        { usenum: 1, forown: true },
        { usenum: 1, forown: true },
        { usenum: 1, forown: true }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.edit {
  .info-box {
    background: rgba(36, 114, 255, 0.04);
    padding: 20px 12px;
  }
  .w-600 {
    width: 800px;
  }
  // 按鈕插槽樣式
  ::v-deep .el-input-group__append,
  .el-input-group__prepend {
    background-color: transparent;
    color: #333333;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: none;
    padding: 0 5px;
    // width: 1px;
    white-space: nowrap;
  }
}
</style>
