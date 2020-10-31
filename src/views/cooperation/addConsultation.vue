<!-- =========================================================================================
     File Name: addConsultation
     Description: 添加会诊
     Component Name: addConsultation
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: whr
     Creation time:  2020-10-31 15:40:29
     Change time:  2020-10-31 15:40:29
========================================================================================== -->
<template>
  <div class="addConsultation">
    <el-card class="box-card">
      <div slot="header">
        <span>{{title}}</span>
      </div>
      <div class="wrapper">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col :span="5"
              ><el-form-item label="姓名">
                <el-input v-model="form.name"></el-input> </el-form-item
            ></el-col>
            <el-col :span="5"
              ><el-form-item label="性别">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="男" value="shanghai"></el-option>
                  <el-option label="女" value="beijing"></el-option>
                </el-select> </el-form-item
            ></el-col>
            <el-col :span="5"
              ><el-form-item label="年龄">
                <el-input v-model="form.name"></el-input> </el-form-item
            ></el-col>
            <el-col :span="5"
              ><el-form-item label="联系方式">
                <el-input v-model="form.name"></el-input> </el-form-item
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <el-form-item label="就诊方式">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="疾病诊断">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="病症详情">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="病历图片">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  list-type="picture"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <el-form-item label="会诊医师">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <el-form-item label="会诊时间">
                <el-date-picker
                  v-model="form.value1"
                  type="datetime"
                  placeholder="选择日期时间"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="会诊目的及要求">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button class="ml-80" type="primary">确 认</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'addConsultation',
  data () {
    return {
      title: '添加会诊',
      form: {
        name: '',
        region: '',
        desc: '',
        value1: ''
      },
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  created () {
    this.getTitle()
  },
  methods: {
    getTitle () {
      if (this.$route.query.type) {
        if (this.$route.query.type === 'referral') {
          this.title = '添加转诊'
        } else {
          this.title = '添加会诊'
        }
      }
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss" scoped>
.addConsultation {
  //   height: calc(100vh - 136px);
  //   width: 100%;
  //   overflow: auto;
  //   background: #ffffff;
  ::v-deep {
    .el-select {
      width: 100%;
    }
    .el-textarea__inner {
      height: 100px;
      box-sizing: border-box;
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 100%;
    }
  }
}
</style>
