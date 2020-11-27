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
    <div class="search-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="4">
            <el-form-item label="患者">
              <el-input
                v-model="form.name"
                placeholder="请输入"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="手机">
              <el-input
                v-model="form.name"
                placeholder="请输入"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="病历号">
              <el-input
                v-model="form.name"
                placeholder="请输入"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="国籍">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="年龄区间">
              <el-row>
                <el-col :span="11">
                  <el-input v-model="form.name" clearable></el-input>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form.name" clearable></el-input>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="性别">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 第二行 -->
          <el-col :span="4">
            <el-form-item label="就诊医师">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="患者来源">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="就诊日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否会员">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="疾病">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <div class="btn-box">
              <el-button type="primary">搜索</el-button>
              <el-button>导出</el-button>
            </div>
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
        <el-table-column prop="date" label="患者"></el-table-column>
        <el-table-column prop="date" label="病历号"></el-table-column>
        <el-table-column prop="date" label="是否会员"></el-table-column>
        <el-table-column prop="date" label="性别"></el-table-column>
        <el-table-column prop="date" label="年龄"></el-table-column>
        <el-table-column prop="date" label="国籍"></el-table-column>
        <el-table-column prop="date" label="籍贯"></el-table-column>
        <el-table-column prop="date" label="手机"></el-table-column>
        <el-table-column prop="date" label="患者来源"></el-table-column>
        <el-table-column prop="date" label="疾病"></el-table-column>
        <el-table-column prop="address" min-width="140" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleShow(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-divider direction="vertical" />
            <el-button @click="handleShow(scope.row)" type="text" size="small"
              >详情</el-button
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
  name: 'patientCenter',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: ''
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
      }
    }
  },
  components: { Pagination },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    pageChange (index) {
      this.paginationConfig.currentPage = index
    },
    handleShow (row) {
      this.$router.push('patientDetails')
    }
  }
}
</script>

<style lang="scss" scoped>
.patientCenter {
  height: calc(100vh - 136px);
  overflow: auto;
  width: 100%;
  background: #ffffff;
  .search-box {
    padding: 26px 30px 0 0;
    .btn-box {
      @include flex-center(flex-end);
    }
  }
  .wrapper {
    padding: 0 40px;
  }
  ::v-deep {
  }
}
</style>
