<!-- =========================================================================================
     File Name: referral
     Description: 转诊
     Component Name: referral
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:28:32
     Change time:  2020-10-26 20:28:32
========================================================================================== -->
<template>
  <div class="referral">
    <div class="search-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row class="row" :gutter="20">
          <el-col :span="6"
            ><el-form-item label="转诊类型">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> </el-form-item
          ></el-col>

          <el-col :span="6">
            <el-button>查询</el-button>
            <el-button @click="goRouter" type="primary">添加转诊</el-button>
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
        <el-table-column prop="date" label="转诊类型"></el-table-column>
        <el-table-column prop="date" label="关联医师"></el-table-column>
        <el-table-column prop="date" label="转诊时间"></el-table-column>
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
  name: 'referral',
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
      this.$router.push({ name: 'addConsultation', query: { type: 'referral' } })
    },
    // 查看转诊详情
    handleShow (row) {
      console.log(row)
      this.$router.push({ name: 'referralDetails' })
    }
  }
}
</script>

<style lang="scss" scoped>
.referral {
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
  }
}
</style>
