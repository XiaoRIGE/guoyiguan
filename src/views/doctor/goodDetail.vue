<!-- =========================================================================================
     File Name: goodDetail
     Description: 成品详情
     Component Name: goodDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-14 14:11:53
     Change time:  2020-11-14 14:11:53
========================================================================================== -->
<template>
  <div class="goodDetail">
    <div class="container-wrap">
      <div class="title pl-30">成品詳情</div>
      <!-- 商品信息 -->
      <div class="good-info">
        <div class="left">
          <el-carousel trigger="click" class="img-box">
            <el-carousel-item v-for="item in goodImgArr" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <!-- <div class="name mb-20">阿莫西林</div> -->
          <div class="desc mt-90 mb-40">
            与吗叮啉、消化酶相比，健胃消食片为“中成药”,且成分均由卫生部批准的“药食同源”中药配伍。在该药的成分中，山楂、麦芽为消食导滞药，太子参、山药为健胃益气药，陈皮为理气导滞药。
          </div>
          <div class="price mb-20">￥100/盒</div>
          <!-- <div class="tips mb-20">
            配送：香港至四川（運費三十元）
            <el-popover placement="right" width="480" trigger="click">
              <span slot="reference" class="other cursor">其他</span>
            </el-popover>
          </div>
          <div class="number">
            <span class="label">數量：</span>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="btns mt-20">
            <span class="btn-blue cursor mr-20">加入購物車</span>
            <span @click="goShopCart" class="btn-red cursor">立即購買</span>
          </div> -->
        </div>
      </div>
      <!-- 商品詳情 -->
      <div class="details-info">
        <div class="little-title">詳情</div>
        <p>
          <span class="label">商品名称</span>
          <span class="value">江中派健胃消食片</span>
        </p>
        <el-row>
          <el-col :span="6">
            <p>
              <span class="label">品牌</span>
              <span class="value">江中派</span>
            </p>
          </el-col>
          <el-col :span="12">
            <p>
              <span class="label">規格</span>
              <span class="value">400mg*60粒</span>
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <p>
              <span class="label">重量</span>
              <span class="value">92g</span>
            </p>
          </el-col>
          <el-col :span="12">
            <p>
              <span class="label">生產廠家</span>
              <span class="value"
                >金纽曼思（上海）食品有限公司委托浙江艾得兰生物科技有限公司</span
              >
            </p>
          </el-col>
        </el-row>
        <p>
          <span class="label">批准文号</span>
          <span class="value">G20150433</span>
        </p>
        <p>
          <span class="label">温馨提示</span>
          <span class="value"
            >部分商品包装更换频繁，如货品与图片
            不完全一致，请以收到的商品实物为准</span
          >
        </p>
        <p>
          <span class="label">主要成分</span>
          <span class="value">陈皮、山楂xxxxxxxxxxxxxxxxxx</span>
        </p>
        <p>
          <span class="label">主治</span>
          <span class="value">儿童消化不良、胃胀气</span>
        </p>
        <p>
          <span class="label">用法用量</span>
          <span class="value">一日三次，一次3片</span>
        </p>
        <p>
          <span class="label">注意事項</span>
          <span class="value">请勿一口吞食</span>
        </p>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=97769683,988293209&fm=26&gp=0.jpg"
          alt=""
        />
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2100927564,1966870237&fm=26&gp=0.jpg"
          alt=""
        />
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=904528777,1161378722&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
// import ChooseCity from './components/ChooseCity'
export default {
  name: 'goodDetail',
  data () {
    return {
      goodImgArr: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3338254340,2108942472&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2491881537,3321640053&fm=26&gp=0.jpg'
      ],
      num: ''
    }
  },
  // components: { ChooseCity },
  created () {},
  methods: {
    handleChange () {},
    goShopCart () {
      this.$router.push('shopCart')
    }
  }
}
</script>

<style scoped  lang="scss">
.goodDetail {
  .container-wrap {
    background: #ffffff;
    // padding: 40px 60px;
    .good-info {
      padding: 12px 20px;
      @include flex-center(space-between, flex-start);
      .left {
        margin-right: 40px;
        .img-box {
          width: 400px;
          height: 400px;
          img {
            width: 100%;
            @include v-center();
          }
        }
      }
      .right {
        .name {
          font-size: 18px;
          font-family: STHeitiTC-Medium, STHeitiTC;
          font-weight: 500;
          color: #222222;
          line-height: 19px;
        }
        .desc {
          @include ellipsis-num(3);
          font-size: 14px;
          font-family: STHeitiTC-Light, STHeitiTC;
          font-weight: 300;
          color: #666666;
          line-height: 24px;
        }
        .price {
          font-size: 18px;
          font-family: STHeitiTC-Medium, STHeitiTC;
          font-weight: 500;
          color: #ff2500;
          line-height: 19px;
        }
        .tips {
          font-size: 14px;
          font-family: STHeitiTC-Light, STHeitiTC;
          font-weight: 300;
          color: #666666;
          line-height: 24px;
          .other {
            color: #268cff;
            display: inline-block;
            margin-left: 20px;
          }
        }
        .number {
          .label {
            display: inline-block;
            margin-right: 20px;
          }
        }
        .btns {
          font-size: 14px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          color: #ffffff;
          line-height: 14px;
          & > span {
            display: inline-block;
            height: 40px;
            border-radius: 2px;
            line-height: 40px;
            text-align: center;
          }
          .btn-blue {
            width: 200px;

            background: #268cff;
          }
          .btn-red {
            width: 100px;
            background: #ff2500;
          }
        }
      }
    }
    .title {
      padding: 20px 0;
      margin-bottom: 20px;
      font-size: 18px;
      font-family: STHeitiSC-Medium, STHeitiSC;
      font-weight: 500;
      color: #222222;
      line-height: 19px;
      border-bottom: 1px solid #f5f6f7;
    }
    .little-title {
      border-top: 1px solid #EEEEEE;
      padding-top: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 22px;
    }
    .details-info {
      padding: 12px 20px;
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
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
