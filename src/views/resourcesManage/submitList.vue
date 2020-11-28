<!-- =========================================================================================
     File Name: submitList
     Description: 提交記錄
     Component Name: submitList
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:38:02
     Change time:  2020-10-26 20:38:02
========================================================================================== -->
<template>
  <div class="submitList">
    <el-card>
      <el-form class="search-box" ref="form" :model="form" label-width="40px">
        <el-row class="row" :gutter="20">
          <el-col :span="3">
            <el-form-item label="名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="處方">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="类型">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="疾病">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="症侯">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="功效">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="狀態">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="日期">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <div class="btn-box">
              <el-button>查詢</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="wrapper">
        <!-- @selection-change="handleSelectionChange" -->
        <el-table :data="tableData" style="width: 100%">
          <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
          <!-- type="expand" -->
          <el-table-column prop="name" label="序號"> </el-table-column>
          <el-table-column prop="name" label="分类">
            <!-- <template slot-scope="scope">
                  <span>{{ scope.row.name }}</span>
                </template> -->
          </el-table-column>
          <el-table-column prop="name" label="處方名称"> </el-table-column>
          <el-table-column prop="name" label="类型"> </el-table-column>
          <el-table-column prop="name" label="疾病"> </el-table-column>
          <el-table-column prop="name" label="症候"> </el-table-column>
          <el-table-column prop="name" label="提交時間"> </el-table-column>
          <el-table-column prop="name" label="狀態"> </el-table-column>
          <el-table-column prop="address" min-width="150" label="操作">
            <template slot-scope="scope">
              <el-button @click="handleShow(scope.row)" type="text" size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">修改</el-button>
              <el-button type="text" size="small">提交審核</el-button>
              <!-- <el-divider direction="vertical" />
            <el-button @click="handleShow(scope.row)" type="text" size="small"
              >详情</el-button
            > -->
            </template>
          </el-table-column>
        </el-table>
        <Pagination
          :paginationConfig="paginationConfig"
          @pageChange="pageChange"
        ></Pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
export default {
  name: 'submitList',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date: ''
      },
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      },
      multipleSelection: [],
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
      ]
    }
  },
  components: { Pagination },
  methods: {
    handleClick () {
      console.log('切换tab')
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    pageChange (index) {
      this.paginationConfig.currentPage = index
    },
    goRouter () {
      this.$router.push({ name: 'submitList' })
    }
  }
}
</script>

<style lang="scss" scoped>
.submitList {
  .search-box {
    .row {
      box-sizing: border-box;
      width: 100%;
    }
    .btn-box {
      @include flex-center(flex-end);
    }
  }
  .wrapper {
  }
  ::v-deep {
    .el-card__body {
      box-sizing: border-box;
      height: calc(100vh - 136px);
      overflow: auto;
      width: 100%;
      background: #ffffff;
    }
  }
}
</style>
