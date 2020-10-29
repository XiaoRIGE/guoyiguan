<!-- =========================================================================================
     File Name: patientCenter
     Description: 患者中心
     Component Name: patientCenter
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:23:48
     Change time:  2020-10-26 20:23:48
========================================================================================== -->
<template>
  <div class="patientCenter">
    <h1>患者中心</h1>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-card class="box-card">
          <div slot="header">
            <span>患者信息</span>
          </div>
          <div class="info">
            <p>
              <span class="desc">患者姓名：</span
              ><span class="value">王二</span>
            </p>
            <p><span class="desc">性别：</span><span class="value">男</span></p>
            <p>
              <span class="desc">病历号：</span
              ><span class="value">15651543165</span>
            </p>
            <p>
              <span class="desc">国籍：</span><span class="value">中国</span>
            </p>
            <p>
              <span class="desc">籍贯：</span
              ><span class="value">四川成都</span>
            </p>
            <p>
              <span class="desc">电话：</span
              ><span class="value">18956457823</span>
            </p>
            <p>
              <span class="desc">就诊次数：</span><span class="value">2</span>
            </p>
            <p>
              <span class="desc">初诊时间：</span
              ><span class="value">2020/06/05 </span>
            </p>
            <p>
              <span class="desc">末诊时间：</span
              ><span class="value">2020/06/05</span>
            </p>
            <p>
              <span class="desc">过敏史：</span><span class="value">无</span>
            </p>
            <p>
              <span class="desc">家族病史：</span><span class="value">无</span>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="19">
        <el-card class="box-card">
          <!-- <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div> -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="就诊记录" name="first">
              <div class="search-box">
                <el-form ref="form" :model="searchForm" label-width="80px">
                  <el-row >
                    <el-col :span="6">
                      <el-form-item label="就诊日期">
                        <el-date-picker
                          v-model="searchForm.date"
                          type="date"
                          placeholder="选择日期"
                        >
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5">
                      <el-form-item label="证型">
                        <el-select
                          v-model="searchForm.region"
                          placeholder="请选择"
                        >
                          <el-option label="XX1" value="shanghai"></el-option>
                          <el-option label="XX2" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5">
                      <el-form-item label="疾病">
                        <el-select
                          v-model="searchForm.jibin"
                          placeholder="请选择"
                        >
                          <el-option label="XX1" value="shanghai"></el-option>
                          <el-option label="XX2" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="4">
                      <div class="flex-right">
                        <el-button type="primary">搜索</el-button>
                      <el-button>导出</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
              <el-table
                @selection-change="handleSelectionChange"
                :data="tableData"
                style="width: 100%"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="date" label="就诊时间" width="180">
                </el-table-column>
                <el-table-column prop="date" label="主诉" width="180">
                </el-table-column>
                <el-table-column prop="date" label="病名" width="180">
                </el-table-column>
                <el-table-column prop="date" label="证型" width="180">
                </el-table-column>
                <el-table-column prop="name" label="就诊医师" width="180">
                </el-table-column>
                <el-table-column prop="address" label="操作">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleShow(scope.row)"
                      type="text"
                      size="small"
                      >查看</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
              <Pagination
                :paginationConfig="paginationConfig"
                @pageChange="pageChange"
              ></Pagination>
            </el-tab-pane>
            <el-tab-pane label="消费记录" name="second">
              <div class="search-box">
                <el-form ref="form" :model="searchForm" label-width="80px">
                  <el-row :gutter="40">
                    <el-col :span="6">
                      <el-form-item label="就诊日期">
                        <el-date-picker
                          v-model="searchForm.date"
                          type="date"
                          placeholder="选择日期"
                        >
                        </el-date-picker>
                      </el-form-item>
                    </el-col>

                    <el-col :span="4">
                      <el-button type="primary">搜索</el-button>
                      <el-button>导出</el-button>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
              <el-table
                @selection-change="handleSelectionChange"
                :data="tableData"
                style="width: 100%"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="date" label="缴费时间">
                </el-table-column>
                <el-table-column prop="date" label="就诊医师">
                </el-table-column>
                <el-table-column prop="date" label="缴费人"> </el-table-column>
                <el-table-column prop="date" label="挂号单"> </el-table-column>
                <el-table-column prop="date" label="应收"> </el-table-column>
                <el-table-column prop="date" label="实收"> </el-table-column>
                <el-table-column prop="date" label="退款"> </el-table-column>
                <el-table-column prop="date" label="小计"> </el-table-column>
                <el-table-column prop="address" label="操作">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleShow(scope.row)"
                      type="text"
                      size="small"
                      >查看</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
              <Pagination
                :paginationConfig="paginationConfig2"
                @pageChange="pageChange2"
              ></Pagination>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
export default {
  name: 'patientCenter',
  data () {
    return {
      activeName: 'first',
      searchForm: {
        date: '',
        region: '',
        jibin: ''
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      multipleSelection: [],
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      },
      paginationConfig2: {
        total: 56,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  components: { Pagination },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleShow (row) {
      console.log(row)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    pageChange (index) {
      this.paginationConfig.currentPage = index
    },
    pageChange2 (index) {
      this.paginationConfig2.currentPage = index
    }
  }
}
</script>

<style lang="scss" scoped>
.patientCenter {
  // min-height: 924px;
  // 左侧
  .box-card {
    height: 100%;
    .info {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 22px;
      p {
        margin-bottom: 10px;
      }
      .desc {
        color: #999999;
        display: inline-block;
        width: 70px;
      }
      .value {
        color: #000000;
      }
    }
  }
  // 右侧
  .search-box {
    .flex-right {
      @include flex-center(flex-end);
    }
  }
  ::v-deep {
    .el-row,
    .el-col {
      height: 100%;
    }
  }
}
</style>
