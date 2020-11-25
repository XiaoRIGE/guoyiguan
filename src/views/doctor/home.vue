<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col class="screen" :span="16">
        <!-- 候诊列表 -->
        <el-card class="box-card1 mb-20">
          <div slot="header" class="clearfix">
            <span>候诊</span>
            <el-button type="primary">直接就诊</el-button>
          </div>
          <el-table :data="tableData" height="320" style="width: 100%">
            <el-table-column prop="date" label="就诊号"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="name" label="性别"> </el-table-column>
            <el-table-column prop="name" label="年龄"> </el-table-column>
            <el-table-column prop="name" label="初/复诊"> </el-table-column>
            <el-table-column prop="name" label="病历号"> </el-table-column>
            <el-table-column prop="name" label="挂单号"> </el-table-column>
            <el-table-column prop="name" label="就诊类型"> </el-table-column>
            <el-table-column prop="address" label="操作" min-width="160">
              <template>
                <el-button @click="goRouter('prescribing')" type="primary">就診</el-button>
                <el-button>叫號</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <!-- 就诊完成列表 -->
        <el-card class="box-card2">
          <div slot="header" class="clearfix">
            <span>就诊完成</span>
          </div>
          <el-table :data="tableData" height="250" style="width: 100%">
            <el-table-column prop="date" label="就诊号"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="name" label="性别"> </el-table-column>
            <el-table-column prop="name" label="年龄"> </el-table-column>
            <el-table-column prop="name" label="初/复诊"> </el-table-column>
            <el-table-column prop="name" label="病历号"> </el-table-column>
            <el-table-column prop="name" label="挂单号"> </el-table-column>
            <el-table-column prop="address" label="操作" min-width="140">
              <template>
                <el-button type="primary">補診</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <!-- 今日预约 -->
      <el-col :span="8">
        <el-card class="box-card screen">
          <div slot="header" class="clearfix">
            <span>今日预约</span>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="就诊号"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="name" label="性别"> </el-table-column>
            <el-table-column prop="name" label="年龄"> </el-table-column>
            <el-table-column prop="name" label="初/复诊"> </el-table-column>
            <el-table-column prop="name" label="預約時間"> </el-table-column>
            <el-table-column prop="name" label="狀態"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
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
  methods: {
    goRouter (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .clearfix {
    @include flex-center(space-between);
  }
}
</style>
