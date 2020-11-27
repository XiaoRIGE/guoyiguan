<!-- =========================================================================================
     File Name: todayDetail
     Description: 就診日期
     Component Name: todayDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-28 01:02:41
     Change time:  2020-11-28 01:02:41
========================================================================================== -->
<template>
  <div class="todayDetail">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>就診日期：2020-11-28</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="no" label="病例號"> </el-table-column>
        <el-table-column prop="username" label="患者姓名"> </el-table-column>
        <el-table-column prop="phone" label="聯係電話"> </el-table-column>
        <el-table-column prop="sex" label="性別"> </el-table-column>
        <el-table-column prop="age" label="年齡"> </el-table-column>
        <el-table-column label="就診記錄">
          <template scope="scope">
            <el-button @click="goRouter(scope.row)" type="text"
              >查看詳情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        :paginationConfig="paginationConfig"
        @pageChange="pageChange"
      ></Pagination>
    </el-card>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
export default {
  name: 'todayDetail',
  components: { Pagination },
  data () {
    return {
      tableData: [
        {
          no: '2016-05-02',
          username: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '19956564578',
          sex: '男',
          age: '25'
        },
        {
          no: '2016-05-04',
          username: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          phone: '19956564578',
          sex: '男',
          age: '25'
        },
        {
          no: '2016-05-01',
          username: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          phone: '19956564578',
          sex: '男',
          age: '25'
        },
        {
          no: '2016-05-03',
          username: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          phone: '19956564578',
          sex: '男',
          age: '25'
        }
      ],
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  created () {},
  methods: {
    pageChange (index) {
      this.paginationConfig.currentPage = index
    },
    goRouter (row) {
      console.log(row)
      //   todo 跳轉后頭部展示内容不對
      this.$router.push({ name: 'medicalDetail' })
    }
  }
}
</script>

<style scoped lang="scss">
.todayDetail {
}
</style>
