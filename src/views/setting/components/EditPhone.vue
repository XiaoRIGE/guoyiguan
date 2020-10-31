<!-- =========================================================================================
     File Name: EditPhone
     Description: 修改手机号
     Component Name: EditPhone
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="EditPhone">
    <el-dialog
      title="修改手机号"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form class="pt-25" ref="form" :model="form" label-width="80px">
        <el-form-item label="新手机号">
          <el-input
            v-model="form.phone"
            placeholder="请输入"
            type="password"
            clearable
          ></el-input>
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
  name: 'EditPhone',
  data () {
    return {
      form: {
        phone: ''
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
.EditPhone {
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
}
</style>
