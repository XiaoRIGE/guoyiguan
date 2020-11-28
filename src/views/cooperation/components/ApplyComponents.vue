<!-- =========================================================================================
     File Name: ApplyComponents
     Description: 會診請求彈窗
     Component Name: ApplyComponents
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="ApplyComponents">
    <el-dialog
      title="您有一個會診請求"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div class="content pb-100">
        <p>
          <span class="label">患者</span>
          <span class="value">張三</span>
        </p>
        <p>
          <span class="label">会诊时间</span>
          <span class="value">2020/06/07 12:00</span>
        </p>
        <p>
          <span class="label">诊断</span>
          <span class="value">xxx</span>
        </p>
        <p>
          <span class="label">病症详情</span>
          <span class="value">xxxxxx</span>
        </p>
        <p>
          <span class="label">发起医师</span>
          <span class="value">李偉</span>
        </p>
        <p>
          <span class="label">会诊方式</span>
          <span class="value">綫下會診</span>
        </p>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="small" @click="handleClose"
          >同意</el-button
        >
        <el-button class="small" @click="visible = true">拒絕</el-button>
        <el-button class="small" @click="handleClose">稍後處理</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="拒絕原因"
      :visible.sync="visible"
      width="30%"
      :before-close="closeVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form :model="form">
        <el-input
          type="textarea"
          v-model="form.reason"
          placeholder="請輸入拒絕原因"
        ></el-input>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="small" @click="handleSure"
          >確定</el-button
        >
        <el-button class="small" @click="closeVisible">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ApplyComponents',
  data () {
    return {
      form: {
        reason: ''
      },
      visible: false
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
    },
    handleSure () {
      // todo  確認拒絕
      this.visible = false
      this.$emit('updateDialogVisible', '')
    },
    closeVisible () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.ApplyComponents {
  ::v-deep {
    .el-dialog__body {
      padding-bottom: 0;
    }
    .el-dialog__footer {
      text-align: right;
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
  .content {
    border-bottom: 1px solid #eeeeee;
    p {
      margin-bottom: 15px;
      .label {
        display: inline-block;
        width: 90px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 22px;
      }
      .value {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
    }
  }
}
</style>
