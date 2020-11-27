<!-- =========================================================================================
     File Name: medicalDetail
     Description: desc
     Component Name: medicalDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-27 22:28:05
     Change time:  2020-11-27 22:28:05
========================================================================================== -->
<template>
  <div class="medicalDetail">
    <!-- 病症信息 -->
    <el-card class="box-card mb-20">
      <div slot="header" class="clearfix">
        <span>病症信息</span>
      </div>
      <div class="content">
        <p>
          <span class="label">主诉</span>
          <span class="value">xxxxxxxx</span>
        </p>
        <p>
          <span class="label">现病史</span>
          <span class="value">xxxxxxxx</span>
        </p>
        <p>
          <span class="label">檢查</span>
          <span class="value">xxxxxxxx</span>
        </p>
        <p class="flex-start">
          <span class="label">圖片</span>
          <span class="img-box">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=291825926,715673926&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1398774405,2215235157&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1538551404,1249696308&fm=26&gp=0.jpg"
              alt=""
            />
          </span>
        </p>
        <el-row :gutter="20">
          <el-col :span="6">
            <p>
              <span class="label">脈象</span>
              <span class="value">xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </p></el-col
          >
          <el-col :span="6"
            ><p>
              <span class="label">舌象</span>
              <span class="value">xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </p></el-col
          >
        </el-row>
        <p class="flex-start">
          <span class="label">圖片</span>
          <span class="img-box">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=291825926,715673926&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1398774405,2215235157&fm=26&gp=0.jpg"
              alt=""
            />
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1538551404,1249696308&fm=26&gp=0.jpg"
              alt=""
            />
          </span>
        </p>
      </div>
    </el-card>
    <!-- 診斷信息 -->
    <el-card class="box-card mb-20">
      <div slot="header" class="clearfix">
        <span>診斷</span>
      </div>
      <div class="content">
        <p>
          <span class="label">主诉</span>
          <span class="value">xxxxxxxx</span>
        </p>
        <p>
          <span class="label">现病史</span>
          <span class="value">xxxxxxxx</span>
        </p>
        <el-row :gutter="20">
          <el-col :span="6">
            <p>
              <span class="label">治则治法</span>
              <span class="value">xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </p></el-col
          >
          <el-col :span="6"
            ><p>
              <span class="label">其他</span>
              <span class="value">xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </p></el-col
          >
        </el-row>
      </div>
    </el-card>
    <!-- 處方信息 -->
    <el-card class="box-card mb-20">
      <div slot="header" class="clearfix">
        <span>處方</span>
      </div>
      <div class="content">
        <!-- 飲品處方盒子樣式 -->
        <div class="wrapper-item mb-10">
          <p class="title">
            處方一
            <span>(飲片)</span>
          </p>
          <div class="yaoji-box mb-30">
            <div class="yaoji-name mr-20">
              桑白皮濃縮粉
              <span class="other-info">(1:5)(1.0g)</span>
            </div>
            <div class="yaoji-name mr-20">
              石菖蒲濃縮粉
              <span class="other-info">(1:5)(1.0g)</span>
            </div>
            <div class="yaoji-name mr-20">
              丹參濃縮粉
              <span class="other-info">(1:5)(1.0g)</span>
            </div>
          </div>
          <div class="total">
            <p class="value">劑量 1 劑 縂 16g</p>
            <p class="value">用法 xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
        </div>
        <!-- 成藥處方盒子樣式 -->
        <div class="wrapper-item mb-10">
          <p class="title">
            處方二
            <span>(成藥)</span>
          </p>
          <div class="chengyao-item">
            <div class="yaoji-name mb-10">
              桑白皮濃縮粉
              <span class="other-info">规格：8g/盒</span>
              <span class="other-info">用量：1 盒</span>
            </div>
          </div>
        </div>
        <!-- 針灸處方盒子樣式 -->
        <div class="wrapper-item mb-10">
          <p class="title">
            處方三
            <span>(針灸)</span>
          </p>
          <div class="zhenjiu-item">
            <p class="yaoji-name">少商、少商、少商、少商、少商、少商、少商</p>
            <p>
              <span class="label">治發</span>
              <span class="value">少商（拔罐，10分钟；针灸，10分钟）</span>
            </p>
            <p class="other-info"></p>
          </div>
        </div>
        <div class="fotter">
          <p>
            <span class="label">醫囑</span>
            <span class="value">xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          </p>
          <div class="flex-box">
            <div class="left">
              <span class="label">醫師簽名</span>
              <span class="qianming">李四</span>
            </div>

            <el-button>載入</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'medicalDetail',
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.medicalDetail {
  .content {
    p {
      margin-bottom: 16px;
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
        font-family: HelveticaNeue;
        color: #333333;
        line-height: 22px;
      }
    }
    .flex-start {
      @include flex-center(flex-start, flex-start);
      .img-box {
        img {
          margin-right: 16px;
          width: 80px;
          height: 80px;
          border-radius: 4px;
        }
      }
    }
    .wrapper-item {
      padding: 20px;
      background: rgba(36, 114, 255, 0.04);
      .title {
        margin-bottom: 46px;
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 26px;
        span {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 26px;
        }
      }
      .yaoji-name {
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 26px;
      }
      .other-info {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
      .yaoji-box {
        @include flex-center(flex-start);
        flex-wrap: wrap;
        // .yaoji-item {
        //   margin-bottom: 26px;
        //   margin-right: 26px;
        //   font-size: 18px;
        //   font-family: PingFangSC-Medium, PingFang SC;
        //   font-weight: 600;
        //   color: rgba(0, 0, 0, 0.85);
        //   line-height: 26px;
        //   .desc {
        //     font-size: 14px;
        //     font-family: PingFangSC-Regular, PingFang SC;
        //     font-weight: 400;
        //     color: #333333;
        //     line-height: 22px;
        //   }
        // }
      }
    }
    .fotter {
      p {
        padding: 40px 0;
      }
      .flex-box {
        @include flex-center(space-between);
      }
      .label {
        display: inline-block;
        width: 90px;
      }
      .qianming {
        font-size: 34px;
        font-family: Helvetica;
        color: #333333;
        line-height: 22px;
      }
    }
  }
}
</style>
