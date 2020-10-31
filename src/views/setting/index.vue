<!-- =========================================================================================
     File Name: setting
     Description: 个人设置
     Component Name: setting
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:38:02
     Change time:  2020-10-26 20:38:02
========================================================================================== -->
<template>
  <div class="setting">
    <div class="set-box">
      <img
        class="mb-50"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=272207346,4106362737&fm=26&gp=0.jpg"
      />
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="手机号" prop="name">
              <el-input v-model="ruleForm.phone" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6"><el-button @click="handleEdit('phone')" type="primary">修改</el-button></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="登录密码" prop="name">
              <el-input
                v-model="ruleForm.pwd"
                type="password"
                disabled
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6"><el-button  @click="handleEdit('pwd')" type="primary">修改</el-button></el-col>
        </el-row>
        <el-form-item label="简体显示" prop="delivery">
          <el-switch v-model="ruleForm.isZH"></el-switch>
        </el-form-item>
      </el-form>
    </div>
    <EditPwd @updateDialogVisible="dialogVisibleType = ''" :dialogVisible="dialogVisibleType === 'pwd'"/>
    <EditPhone @updateDialogVisible="dialogVisibleType = ''" :dialogVisible="dialogVisibleType === 'phone'"/>
  </div>
</template>

<script>
import EditPwd from './components/EditPwd'
import EditPhone from './components/EditPhone'
export default {
  name: 'setting',
  data () {
    return {
      ruleForm: {
        phone: '18709821876',
        pwd: '12345678',
        isZH: true
      },
      dialogVisibleType: ''
    }
  },
  components: { EditPwd, EditPhone },
  methods: {
    handleEdit (type) {
      this.dialogVisibleType = type
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  height: calc(100vh - 136px);
  width: 100%;
  overflow: auto;
  background: #ffffff;
  .set-box {
    width: 400px;
    @include hv-center();
    img {
      @include h-center();
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
}
</style>
