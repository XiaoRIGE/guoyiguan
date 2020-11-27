<!-- =========================================================================================
     File Name: PrescriptionItem
     Description: 處方組件
     Component Name: PrescriptionItem
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-25 22:43:07
     Change time:  2020-11-25 22:43:07
========================================================================================== -->
<template>
  <div class="PrescriptionItem">
    <div class="item-box">
      <!-- 頭部 -->
      <div class="header">
        處方{{ getZH }}
        <span class="type">({{ getType }})</span>
        <div class="btn-box">
          <el-button> <svg-icon name="icon-eye"></svg-icon>隱藏</el-button>
          <el-button @click="isEdit = !isEdit" v-if="!isEdit">修改</el-button>
          <el-button>
            <svg-icon name="icon-shanchu"></svg-icon>
            刪除</el-button
          >
        </div>
      </div>
      <!-- 處方内容 -->
      <div class="content">
        <!-- 飲片處方 -->
        <div v-if="PrescriptionType === 1">
          <div class="content-wrapper1 common-base">
            <div
              v-for="(item, index) in drink"
              :key="index"
              class="item mr-30 mb-16"
            >
              <p class="head">
                <span>少商</span>
                <svg-icon class="cursor" name="delete"></svg-icon>
              </p>
              <el-form label-width="40px">
                <el-row :gutter="4" class="mb-4 center-row">
                  <el-col :span="20" class="mb-4">
                    <el-form-item v-if="isEdit" label="用量">
                      <el-input v-model="item.usenum" placeholder="治法">
                        <span slot="append">g</span>
                      </el-input>
                    </el-form-item>
                    <span v-else>用量 {{ item.usenum }}g</span>
                  </el-col>
                  <el-col :span="4">
                    <svg-icon
                      v-if="isEdit"
                      name="icon-warn"
                      class="mt-10"
                    ></svg-icon>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                  <el-col :span="12">
                    <el-select
                      v-if="isEdit"
                      v-model="item.usetype"
                      placeholder="煎法"
                    >
                      <el-option label="1h" value="shanghai"></el-option>
                      <el-option label="2h" value="beijing"></el-option>
                    </el-select>
                    <span v-else>煎法</span>
                  </el-col>
                  <el-col :span="12">
                    <el-checkbox
                      v-if="isEdit"
                      v-model="item.forown"
                      class="mt-10 ml-20"
                      >自备</el-checkbox
                    >
                    <span v-else>自备</span>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <!-- 計量用法 -->
          <div class="use-method">
            <el-form label-width="40px">
              <el-row :gutter="40">
                <el-col :span="4">
                  <el-form-item v-if="isEdit" label="劑量">
                    <el-input v-model="form.jinum" placeholder="治法">
                      <span slot="append">總 16g</span>
                    </el-input>
                  </el-form-item>
                  <span v-else>劑量{{ form.jinum }}</span>
                </el-col>
                <el-col :span="12">
                  <el-form-item v-if="isEdit" label="用法">
                    <el-input v-model="form.usemethod" placeholder="請輸入">
                    </el-input>
                  </el-form-item>
                  <span v-else>用法：{{ form.usemethod }}</span>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <!-- 成藥處方 -->
        <div v-if="PrescriptionType === 2">
          <div class="content-wrapper2">
            <div
              v-for="(item, index) in patentMedicine"
              :key="index"
              class="item mb-10"
            >
              <el-form label-width="40px">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <span class="name">健胃消食片</span>
                  </el-col>
                  <el-col :span="3">
                    <span class="desc">规格：8g/盒</span>
                  </el-col>
                  <el-col class="flex" :span="4">
                    <el-form-item
                      v-if="isEdit"
                      class="width-limit"
                      label="用量"
                    >
                      <el-input v-model="item.num"></el-input>
                    </el-form-item>
                    <span v-if="isEdit" class="name ml-4">盒</span>
                    <span v-else>{{ item.num }}盒</span>
                  </el-col>
                  <el-col class="flex" :span="3">
                    <el-form-item>
                      <el-checkbox v-if="isEdit" v-model="item.checked"
                        >自備</el-checkbox
                      >
                    </el-form-item>
                  </el-col>
                  <el-col class="flex lang-input" :span="9">
                    <el-form-item v-if="isEdit" label="用法">
                      <el-input
                        v-model="item.desc"
                        placeholder="請輸入"
                      ></el-input>
                    </el-form-item>
                    <span v-else>用法：xxxxxxxxx</span>
                  </el-col>
                  <el-col v-if="isEdit" :span="1">
                    <svg-icon name="delete" class="mt-16 cursor"></svg-icon>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
        </div>
        <!-- 針灸處方 -->
        <div v-if="PrescriptionType === 3">
          <div class="content-wrapper3 common-base">
            <div
              v-for="(item, index) in acupuncture"
              :key="index"
              class="item mr-30 mb-16"
            >
              <p class="head">
                <span>少商</span>
                <svg-icon class="cursor" name="delete"></svg-icon>
              </p>
              <el-form>
                <el-row :gutter="4" class="mb-4">
                  <el-col :span="12">
                    <el-form-item>
                      <el-select
                        v-if="isEdit"
                        v-model="item.aa"
                        placeholder="治法"
                      >
                        <el-option label="按摩" value="按摩"></el-option>
                        <el-option label="針灸" value="針灸"></el-option>
                      </el-select>
                      <span v-else>{{ item.aa }}:</span>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <el-select
                        v-if="isEdit"
                        v-model="item.bb"
                        placeholder="時間"
                      >
                        <el-option label="30" value="30"></el-option>
                        <el-option label="60" value="60"></el-option>
                      </el-select>
                      <span v-else>{{ item.bb }}分鐘</span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="4">
                  <el-col :span="12">
                    <el-form-item>
                      <el-select
                        v-if="isEdit"
                        v-model="item.cc"
                        placeholder="治法"
                      >
                        <el-option label="按摩" value="按摩"></el-option>
                        <el-option label="針灸" value="針灸"></el-option>
                      </el-select>
                      <span v-else>{{ item.cc }}:</span>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <el-select
                        v-if="isEdit"
                        v-model="item.dd"
                        placeholder="時間"
                      >
                        <el-option label="30" value="30"></el-option>
                        <el-option label="60" value="60"></el-option>
                      </el-select>
                      <span v-else>{{ item.dd }}分鐘</span>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
        </div>
        <!-- 免煎中藥 -->
        <div v-if="PrescriptionType === 4">
          <div class="common-base">
            <div
              v-for="(item, index) in mianjian"
              :key="index"
              class="item mr-30 mb-16"
            >
              <p class="head">
                <span>少商</span>
                <svg-icon class="cursor" name="delete"></svg-icon>
              </p>
              <el-form label-width="40px">
                <el-row :gutter="4" class="mb-4 center-row">
                  <el-col :span="20" class="mb-4">
                    <el-form-item v-if="isEdit" label="用量">
                      <el-input v-model="item.usenum">
                        <span slot="append">g</span>
                      </el-input>
                    </el-form-item>
                    <span v-else>用量：{{ item.usenum }}g</span>
                  </el-col>
                  <el-col :span="4">
                    <span v-if="isEdit" class="mt-10 inblock">1:5</span>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                  <el-col v-if="isEdit" :span="12">
                    <el-checkbox v-model="item.forown">自备</el-checkbox>
                  </el-col>
                  <span v-else>自备</span>
                </el-row>
              </el-form>
            </div>
          </div>
          <!-- 計量用法 -->
          <div class="use-method">
            <el-form label-width="40px">
              <el-row :gutter="40">
                <el-col :span="4">
                  <el-form-item v-if="isEdit" label="劑量">
                    <el-input v-model="form.usenum2">
                      <span slot="append">總 16g</span>
                    </el-input>
                  </el-form-item>
                  <span v-else>劑量:{{ form.usenum2 }}g 總 16g</span>
                </el-col>
                <el-col :span="12">
                  <el-form-item v-if="isEdit" label="用法">
                    <el-input v-model="form.method2" placeholder="請輸入">
                    </el-input>
                  </el-form-item>
                  <span v-else>用法:{{ form.method2 }}</span>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div v-if="isEdit" class="fotter">
        <el-button>
          <svg-icon name="icon-file-gray"></svg-icon>
          存爲自定義處方</el-button
        >
        <el-button type="primary" @click="isEdit = !isEdit"
          ><svg-icon name="icon-file-white" ></svg-icon
          > 保存</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrescriptionItem',
  data () {
    return {
      form: {
        name: '1',
        checked: true,
        desc: '',
        region: '',
        usenum: 1,
        usemethod: '',
        jinum: 1,
        usenum2: 1,
        method2: ''
      },
      // 飲片處方
      drink: [
        {
          usenum: 1,
          usetype: '',
          forown: true
        },
        // {
        //   usenum: 1,
        //   usetype: '',
        //   forown: true
        // },
        {
          usenum: 1,
          usetype: '',
          forown: true
        },
        {
          usenum: 1,
          usetype: '',
          forown: true
        },
        {
          usenum: 1,
          usetype: '',
          forown: true
        },
        {
          usenum: 1,
          usetype: '',
          forown: true
        }
      ],
      // 成藥處方
      patentMedicine: [
        {
          num: '1',
          checked: true,
          desc: ''
        }
      ],
      // 針灸處方
      acupuncture: [
        {
          aa: '',
          bb: '',
          cc: '',
          dd: ''
        },
        {
          aa: '',
          bb: '',
          cc: '',
          dd: ''
        },
        {
          aa: '',
          bb: '',
          cc: '',
          dd: ''
        },
        {
          aa: '',
          bb: '',
          cc: '',
          dd: ''
        },
        {
          aa: '',
          bb: '',
          cc: '',
          dd: ''
        }
        // {
        //   aa: '',
        //   bb: '',
        //   cc: '',
        //   dd: ''
        // }
      ],
      // 免煎中藥
      mianjian: [
        { usenum: 1, forown: true },
        { usenum: 1, forown: true },
        { usenum: 1, forown: true },
        { usenum: 1, forown: true },
        { usenum: 1, forown: true }
        // { usenum: 1, forown: true }
      ],
      isEdit: true
    }
  },
  computed: {
    getType () {
      let result
      switch (this.PrescriptionType) {
        case 1:
          result = '飲片'
          break
        case 2:
          result = '成藥'
          break
        case 3:
          result = '針灸'
          break
        case 4:
          result = '免煎中藥'
          break
      }
      return result
    },
    getZH () {
      let result
      switch (this.index) {
        case 1:
          result = '一'
          break
        case 2:
          result = '二'
          break
        case 3:
          result = '三'
          break
        case 4:
          result = '四'
          break
        case 5:
          result = '五'
          break
        case 6:
          result = '六'
          break
        case 7:
          result = '七'
          break
        case 8:
          result = '八'
          break
        case 9:
          result = '九'
          break
        case 10:
          result = '十'
          break
      }
      return result
    }
  },
  props: {
    PrescriptionType: {
      type: [Number],
      default: 1 // 處方類型 1 飲片 2 成藥 3 針灸 4 免煎中藥
    },
    index: {
      type: [Number, String],
      default: '一'
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.PrescriptionItem {
  .item-box {
    padding: 17px;
    background: rgba(36, 114, 255, 0.04);
    .header {
      position: relative;
      margin-bottom: 35px;
      text-align: center;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 26px;
      .type {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 26px;
      }
      .btn-box {
        position: absolute;
        right: 0;
        top: -4px;
      }
    }
    .fotter {
      @include flex-center(flex-end);
      margin-top: 30px;
    }
    .common-base {
      @include flex-center(flex-start);
      flex-wrap: wrap;
      .item {
        box-sizing: border-box;
        padding: 6px;
        width: 170px;
        // height: 110px;
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #cccccc;
        .head {
          padding: 6px 0 6px;
          @include flex-center(space-between);
          span {
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            line-height: 26px;
          }
        }
        .el-form-item {
          margin-bottom: 0;
        }
      }
      .use-method {
        flex: 1;
      }
    }
    // 飲片處方樣式
    .content-wrapper1 {
    }
    //成藥處方樣式
    .content-wrapper2 {
      .item {
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
        height: 50px;
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #cccccc;
        .name {
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 50px;
        }
        .desc {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 50px;
        }
        .flex {
          height: 50px;
          @include flex-center(flex-start);
          .width-limit {
            width: 90px;
          }
        }
        .lang-input .el-input {
          width: 300px;
        }
      }
      .el-form-item {
        margin-bottom: 0;
      }
    }
    // .針灸處方樣式
    .content-wrapper3 {
    }
  }
  .gray {
    color: #333333;
  }
  .white {
    background: #fff;
  }
  // 按鈕插槽樣式
  ::v-deep .el-input-group__append,
  .el-input-group__prepend {
    background-color: transparent;
    color: #333333;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: none;
    padding: 0 5px;
    // width: 1px;
    white-space: nowrap;
  }
}
</style>
