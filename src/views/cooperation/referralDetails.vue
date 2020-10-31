<!-- =========================================================================================
     File Name: referralDetails
     Description: 转诊详情
     Component Name: referralDetails
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="referralDetails">
    <el-row :gutter="20">
      <el-col :span="5">
        <PatientInfo />
      </el-col>
      <el-col :span="19">
        <el-card class="box-card mb-15">
          <div slot="header">
            <span>病情信息</span>
          </div>
          <div class="info">
            <p>
              <span class="desc">患者姓名</span><span class="value">王二</span>
            </p>
            <p><span class="desc">性别</span><span class="value">男</span></p>
          </div>
        </el-card>
        <el-card class="box-card mb-15">
          <div slot="header">
            <span>病例图片</span>
          </div>
          <div class="img-box">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382859974,1200031695&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382859974,1200031695&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382859974,1200031695&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382859974,1200031695&fm=26&gp=0.jpg"
              alt=""
            />
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header">
            <span>会诊详情</span>
          </div>
          <div class="info">
            <p>
              <span class="desc">发起医师</span><span class="value">王二</span>
            </p>
            <p>
              <span class="desc">就诊方式</span
              ><span class="value">线下会诊</span>
            </p>
            <p>
              <span class="desc">参与会诊时间</span
              ><span class="value">2020/06/04 17:05</span>
            </p>
            <p>
              <span class="desc">参与医师</span
              ><span class="value"
                >张三（已同意）、李四（已拒绝）、王二医师（处理中）</span
              >
            </p>
            <p>
              <span class="desc">诊疗状态</span
              ><span class="value">未开始</span>
            </p>
            <p>
              <span class="desc">医疗结果</span
              ><span class="value">诊疗结果内容xxxxxxxxxxxxxxxxx</span>
            </p>
          </div>
          <div class="btn-boxs">
              <el-button>取消会诊</el-button>
              <el-button type="primary">取消会诊</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PatientInfo from '@/components/common/PatientInfo'
export default {
  name: 'referralDetails',
  data () {
    return {}
  },
  components: { PatientInfo }
}
</script>

<style lang="scss" scoped>
.referralDetails {
  //   height: calc(100vh - 136px);
  // width: 100%;
  // overflow: auto;
  // background: #ffffff;
  .box-card {
    .img-box {
      img {
        margin-right: 15px;
        width: 120px;
        height: 120px;
      }
    }
    .btn-boxs {
        margin: 60px 0 0 250px;
    }
  }
}
</style>
