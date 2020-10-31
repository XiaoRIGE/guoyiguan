<!-- =========================================================================================
     File Name: consultation
     Description: 会诊
     Component Name: consultation
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:28:32
     Change time:  2020-10-26 20:28:32
========================================================================================== -->
<template>
  <div class="consultation">
    <div class="search-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row class="row" :gutter="20">
          <el-col :span="6"
            ><el-form-item label="会诊时间">
              <el-date-picker
                v-model="form.value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker> </el-form-item
          ></el-col>
          <el-col :span="4"
            ><el-form-item label="类型">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="4">
            <el-form-item label="会诊状态">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button>查询</el-button>
            <el-button @click="goRouter" type="primary">添加会诊</el-button>
          </el-col>
          <el-col :span="4">
            <div class="flex-right"><el-button>已拒绝列表</el-button></div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="wrapper">
      <el-table :data="tableData" style="width: 100%">
        <!-- <el-table-column
      type="selection"
      width="55">
    </el-table-column> -->
        <el-table-column prop="date" label="序号"></el-table-column>

        <el-table-column prop="date" label="患者"></el-table-column>
        <el-table-column prop="date" label="病历号"></el-table-column>
        <el-table-column prop="date" label="会诊类型"></el-table-column>
        <el-table-column prop="date" label="会诊来源"></el-table-column>
        <el-table-column prop="date" label="会诊状态">
          <template slot-scope="scope">
            <span
              class="status-btn"
              :class="
                scope.row.states === '已结束'
                  ? 'end'
                  : scope.row.states === '已取消'
                  ? 'cancel'
                  : 'unstart'
              "
              >{{ scope.row.states }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="date" label="会诊时间"></el-table-column>

        <el-table-column prop="address" min-width="120" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleShow(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-divider direction="vertical" />
            <el-button @click="handleShow(scope.row)" type="text" size="small"
              >取消</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        :paginationConfig="paginationConfig"
        @pageChange="pageChange"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
export default {
  name: 'consultation',
  data () {
    return {
      form: {
        value1: '',
        region: ''
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          states: '已结束'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          states: '已取消'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          states: '未开始'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          states: '未开始'
        }
      ],
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  components: { Pagination },
  methods: {
    pageChange (index) {
      this.paginationConfig.currentPage = index
    },
    // 添加会诊
    goRouter () {
      this.$router.push({ name: 'addConsultation', query: { type: 'consultation' } })
    }
  }
}
</script>

<style lang="scss" scoped>
.consultation {
  height: calc(100vh - 136px);
  width: 100%;
  overflow: auto;
  background: #ffffff;
  .search-box {
    padding-top: 28px;
    .row {
      width: 100%;
    }
  }
  .wrapper {
    padding: 0 40px;
    box-sizing: border-box;
    .status-btn {
      display: inline-block;
      width: 52px;
      height: 22px;
      border-radius: 4px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      text-align: center;
      line-height: 22px;
    }
    .end {
      background: #f0ffe0;
      border: 1px solid #7bab47;
      color: #589f0c;
    }
    .cancel {
      background: #f8f8f8;
      border: 1px solid #e2e2e2;
      color: #cacacc;
    }
    .unstart {
      background: #fff1eb;
      border: 1px solid #ffb999;
      color: #ff5100;
    }
  }
  ::v-deep {
    .el-date-editor--daterange.el-input,
    .el-date-editor--daterange.el-input__inner,
    .el-date-editor--timerange.el-input,
    .el-date-editor--timerange.el-input__inner {
      width: 280px;
    }
  }
}
</style>
