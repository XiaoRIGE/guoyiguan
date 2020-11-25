<!-- =========================================================================================
     File Name: Expenses
     Description: 費用組件
     Component Name: Expenses
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-25 22:43:07
     Change time:  2020-11-25 22:43:07
========================================================================================== -->
<template>
  <div class="Expenses">
    <el-card class="box-card">
      <p class="title mb-20">
        <span class="name">收費明細</span>
        <el-button type="primary">划價</el-button>
      </p>
      <div class="center">
        <ul>
          <li class="head">
            <el-row>
              <el-col :span="12">收費類別</el-col>
              <el-col :span="4">數量</el-col>
              <el-col :span="8">金額</el-col>
            </el-row>
          </li>
          <li v-for="(item, index) in list" :key="index">
            <el-row>
              <el-col :span="12">{{ item.type }}</el-col>
              <el-col :span="4">{{ item.num }}</el-col>
              <el-col :span="8">{{ item.price }}</el-col>
            </el-row>
          </li>
          <li class="bottom">
            <span class="left">合計： <span class="price">610.00</span></span>
            <span class="right">共{{ list.length }}項</span>
          </li>
        </ul>
      </div>
      <div class="fotter mt-25">
        <el-button type="primary" class="mr-24">結束就診</el-button>
        <el-button>證明打印</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Expenses',
  data () {
    return {
      list: [
        { type: '挂號費', num: 1, price: '10.00' },
        { type: '治療費', num: 1, price: '10.00' },
        { type: '推拿費', num: 1, price: '10.00' },
        { type: '加工費', num: 1, price: '10.00' }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Expenses {
  .box-card {
    .title {
      @include flex-center(space-between);
      .name {
        font-size: 18px;
        font-family: PingFangTC-Light, PingFangTC;
        font-weight: 300;
        color: #000000;
        line-height: 16px;
      }
    }
    .center {

      li {
        box-sizing: border-box;
        padding: 0 25px;
        height: 54px;
        line-height: 54px;
        background: rgba(221, 221, 221, 0.1);
        border-bottom: 1px solid #dddddd;
      }
      .el-col-8 {
        text-align: right;
      }
      .head {
        background: #fafafa;
      }
      .bottom {
        @include flex-center(space-between);
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #565656;
        line-height: 22px;
        .price {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 600;
          color: #e73a38;
          line-height: 22px;
        }
      }
    }
    .fotter {
      @include flex-center();
    }
  }
}
</style>
