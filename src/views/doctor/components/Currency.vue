<!-- =========================================================================================
     File Name: currency
     Description: 開處方-右上角通用組件
     Component Name: currency
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-27 20:59:56
     Change time:  2020-11-27 20:59:56
========================================================================================== -->
<template>
  <div class="currency">
    <el-card class="mb-20">
      <!-- class="pl-10 pr-10" -->
      <el-tabs v-if="showType === '1'" v-model="activeName" >
        <el-tab-pane label="既往病例" name="first"> </el-tab-pane>
        <el-tab-pane label="傳統處方" name="second"></el-tab-pane>
        <el-tab-pane label="協定處方" name="third"></el-tab-pane>
        <el-tab-pane label="自定義處方" name="fourth"></el-tab-pane>
      </el-tabs>
      <el-tabs v-if="showType === '2'" v-model="activeName" >
        <el-tab-pane label="既往病例" name="first"> </el-tab-pane>
        <el-tab-pane label="產品列" name="second"></el-tab-pane>
      </el-tabs>
      <!-- 查詢條件 -->
      <div class="pane-case">
        <el-row :gutter="40">
          <el-form
            class="search-form border-bottom"
            ref="form"
            :model="form"
            label-width="40px"
          >
            <el-col :span="12">
              <el-form-item label="功效">
                <el-select v-model="form.a" placeholder="請選擇">
                  <el-option label="功效一" value="shanghai"></el-option>
                  <el-option label="功效二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="疾病">
                <el-select v-model="form.b" placeholder="請選擇">
                  <el-option label="疾病一" value="shanghai"></el-option>
                  <el-option label="疾病二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
        <!-- 病例列表 -->
        <div class="list">
          <div
            v-for="(item, index) in 4"
            :key="index"
            class="list-item border-bottom"
          >
            <p class="name">此處為處方標題</p>
            <p class="desc">功效：此处为该处方的功效说明</p>
            <p class="desc">功效：此处为该处方的功效说明</p>
            <div class="btn-box">
              <el-button>載入</el-button>
              <el-button @click="gorouter">詳情</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'currency',
  data () {
    return {
      activeName: 'first',
      form: {
        a: '',
        b: ''
      }
    }
  },
  props: {
    showType: {
      type: String,
      default: '1'
    }
  },
  created () {},
  methods: {
    gorouter () {
      // todo 判斷跳轉哪個詳情
    //   臨時判斷
      if (this.activeName === 'first') {
        this.$router.push({ name: 'medicalDetail' })
      } else {
        this.$router.push({ name: 'goodDetail' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.currency {
  ::v-deep {
    .el-card__body {
      padding: 20px 0 0;
    }
    .el-tabs__header {
      padding: 0 10px;
    }
    .el-tabs__item {
        font-size: 16px;
    }
    .el-tabs__nav {
        .is-active {
            font-weight: 600;
        }
    }
  }
  .border-bottom {
    border-bottom: 1px solid #d7dbe0;
  }
  //   既往病例
  .pane-case {
    .search-form {
      box-sizing: border-box;
      padding: 0 20px;
      height: 70px;
      @include flex-center(flex-start);
    }
    .list {
      &-item {
        padding: 20px 16px 10px;
        .name {
          margin-bottom: 10px;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #3a3a3a;
          line-height: 25px;
        }
        .desc {
          margin-bottom: 2px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #717171;
          line-height: 22px;
        }
        .btn-box {
          @include flex-center(flex-end);
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
