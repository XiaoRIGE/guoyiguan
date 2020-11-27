<template>
  <div class="review screen">
    <div class="search-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="20" class="row">
          <el-col :span="8">
            <el-form-item label="就诊日期">
              <el-date-picker
                v-model="form.value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button @click="goRouter" type="primary">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="wrapper">
      <el-table :data="tableData" border show-summary style="width: 100%">
        <el-table-column prop="id" label="出诊日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="总额"> </el-table-column>
        <el-table-column prop="amount1" sortable label="就诊数">
        </el-table-column>
        <el-table-column prop="amount2" sortable label="药费">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="挂号费">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="诊费">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="治疗费">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="疗程费">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="代加工费">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="商品">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="检查费">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="其他">
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
  name: 'review',
  data () {
    return {
      form: {
        value1: ''
      },
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      },
      tableData: [
        {
          id: '2020-11-28',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '2020-11-28',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '2020-11-28',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '2020-11-28',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '2020-11-28',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ]
    }
  },
  components: { Pagination },
  methods: {
    pageChange (index) {
      this.paginationConfig.currentPage = index
    },
    goRouter () {
      this.$router.push({ name: 'todayDetail' })
    }
  }
}
</script>

<style lang="scss" scoped>
.review {
  // height: calc(100vh - 136px);
  overflow: auto;
  width: 100%;
  background: #ffffff;
  .search-box {
    padding-top: 28px;
    padding-left: 50px;
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
