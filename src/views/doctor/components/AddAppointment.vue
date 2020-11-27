<!-- =========================================================================================
     File Name: AddAppointment
     Description: 添加預約
     Component Name: AddAppointment
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="AddAppointment">
    <el-dialog
      title="添加預約"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="">
          <span>2020/09/09</span>
        </el-form-item>
        <el-form-item label="就診時間">
          <el-time-picker placeholder="选择时间" v-model="form.time" style="width: 50%;"></el-time-picker>
        </el-form-item>
        <el-form-item label="預約醫師">
          <el-select v-model="form.doctor" placeholder="请选择活动区域"  style="width: 50%;">
            <el-option label="陳醫師" value="cheng"></el-option>
            <el-option label="王醫師" value="wang"></el-option>
          </el-select>
        </el-form-item>
        <div class="line mb-20"></div>
        <el-form-item label="病例號">
          <el-input
            v-model="form.no"
            placeholder="请输入"
            type="password"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="真實姓名">
          <el-input
            v-model="form.username"
            placeholder="请输入"
            type="password"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="性別">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年齡">
          <el-input
            v-model="form.age"
            placeholder="请输入"
            type="password"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="電話">
          <el-input
            v-model="form.phone"
            placeholder="请输入"
            type="password"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="就診方式">
          <el-radio-group v-model="form.jiuzhentype">
            <el-radio label="綫上就診"></el-radio>
            <el-radio label="綫下就診"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="初/復診">
          <el-radio-group v-model="form.isFirst">
            <el-radio label="初診"></el-radio>
            <el-radio label="復診"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="small" @click="handleClose"
          >确 认</el-button
        >
        <el-button class="small" @click="handleClose">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddAppointment',
  data () {
    return {
      form: {
        time: '',
        doctor: '',
        no: '',
        sex: '',
        username: '',
        age: '',
        phone: '',
        jiuzhentype: '綫上就診',
        isFirst: '初診'
      },
      rules: {
        time: [
          { required: true, message: '请選擇就診時間', trigger: 'change' }
        ],
        doctor: [
          { required: true, message: '请选择預約醫師', trigger: 'change' }
        ],
        username: [
          { required: true, message: '请輸入真實姓名', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请輸入真實姓名', trigger: 'change' }
        ]

      }
    }
  },
  props: {
    dialogVisible: {
      type: Boolean
    }
  },
  methods: {
    handleClose () {
      this.$emit('updateDialogVisible', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.AddAppointment {
  ::v-deep {
    .el-dialog__body {
      padding-bottom: 0;
    }
    .el-dialog__footer {
      text-align: center;
    }
    .el-form-item__label {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
    .el-form-item__content {
      padding-right: 76px;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: #d7dbe0;
  }
}
</style>
