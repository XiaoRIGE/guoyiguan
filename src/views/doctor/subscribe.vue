<template>
  <div class="subscribe">
    <el-row>
      <el-col class="left mr-20" :span="11">
        <el-calendar v-model="value">
          <template slot="dateCell" slot-scope="{ data }">
            <span>
              {{ data.day.split("-")[2] }}
            </span>
            <div v-for="(item, index) in calendarData" :key="index">
              <div
                v-if="
                  item.months.indexOf(data.day.split('-').slice(1)[0]) != -1
                "
              >
                <div
                  v-if="
                    item.days.indexOf(data.day.split('-').slice(2).join('-')) !=
                    -1
                  "
                >
                  <div class="is-selected">{{ item.things }}</div>
                </div>
                <div v-else></div>
              </div>
              <div v-else></div>
            </div>

            <!-- type，isSelected，day -->
          </template>
        </el-calendar>
        <el-button @click="dialogVisible = true" type="primary" class="my-button">添加預約</el-button>
      </el-col>
      <el-col class="right" :span="12">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="user" label="患者"> </el-table-column>
          <el-table-column prop="sex" label="性别"> </el-table-column>
          <el-table-column prop="isFirst" label="初/複"> </el-table-column>
          <el-table-column prop="time" label="預約時間"> </el-table-column>
          <el-table-column prop="source" label="會診來源"> </el-table-column>
          <el-table-column prop="address" label="就診地點"> </el-table-column>
          <el-table-column prop="status" label="狀態"> </el-table-column>
          <el-table-column min-width="200" label="操作">
            <template slot-scope="scope">
              <span
                @click="handleClick(scope.row)"
                type="text"
                class="corlor-blue"
                >修改</span
              >
              <span type="text" class="corlor-blue">取消</span>
              <span type="text" class="corlor-blue">詳情</span>
              <!-- <el-button type="text">再次預約</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <div class="pl-40 pr-20">
          <Pagination
            :paginationConfig="paginationConfig"
            @pageChange="pageChange"
          ></Pagination>
        </div>
      </el-col>
    </el-row>
    <AddAppointment @updateDialogVisible="dialogVisible = false" :dialogVisible="dialogVisible"></AddAppointment>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
import AddAppointment from './components/AddAppointment'
export default {
  name: 'subscribe',
  components: { Pagination, AddAppointment },
  data () {
    return {
      value: new Date(),
      calendarData: [
        { months: ['11'], days: ['02'], things: '已预约10' },
        { months: ['11'], days: ['03'], things: '已预约10' },
        { months: ['11'], days: ['12'], things: '已预约15' }
      ],
      tableData: [
        {
          user: '王二',
          sex: '男',
          isFirst: '是',
          time: '2020-11-20',
          source: '綫上預約',
          address: '綫上就診',
          status: '已取消'
        },
        {
          user: '王二',
          sex: '男',
          isFirst: '是',
          time: '2020-11-20',
          source: '綫上預約',
          address: '綫上就診',
          status: '已就診'
        },
        {
          user: '王二',
          sex: '男',
          isFirst: '是',
          time: '2020-11-20',
          source: '綫上預約',
          address: '綫上就診',
          status: '未到期'
        },
        {
          user: '王二',
          sex: '男',
          isFirst: '是',
          time: '2020-11-20',
          source: '綫上預約',
          address: '綫上就診',
          status: '已取消'
        }
      ],
      paginationConfig: {
        total: 4,
        currentPage: 1,
        pageSize: 10
      },
      dialogVisible: false
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    pageChange (index) {
      this.paginationConfig.currentPage = index
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribe {
  .left {
    background: #fff;
    ::v-deep {
      .is-today {
        .el-calendar-day {
          span {
            display: inline-block;
            color: #fff;
            width: 26px;
            height: 26px;
            line-height: 26px;
            border-radius: 50%;
            text-align: center;
            background: #1677ff;
          }
        }
      }
    }
    .is-selected {
      margin-top: 20px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #3b98ff;
      line-height: 13px;
    }
    .my-button {
      margin-left: 610px;
      margin-bottom: 20px;
    }
  }
  .right {
    background: #fff;
    .corlor-blue {
      display: inline-block;
      padding: 10px;
      color: #3b98ff;
    }
  }
}
</style>
