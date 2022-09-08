<template>
  <el-row class="home" :gutter="20" style="margin: 0">
    <!-- 左边上面个人信息 -->
    <el-col :span="8" style="margin-left: 15px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userimg" class="userImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="loginInfo">
          <p>上次登录时间：<span>2021-7-9</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <!-- 左边下列表 -->
      <el-card style="margin-top: 20px; height: 410px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右边 -->
    <el-col :span="16" style="margin-">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ padding: 0, display: 'flex' }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- //右边中间 -->
      <el-card style="height: 240px; margin-bottom: 10px">
        <div style="height: 240px" ref="echarts"></div>
      </el-card>
      <!-- 右边下方 -->
      <div class="graph" style="display: flex; justify-content: space-between">
        <el-card >
          <div style="height:220px;weight:100%" ref="userEcharts"></div>
        </el-card>
        <el-card >
          <div  style="height:220px;weight:100%" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../api/data";
import * as echarts from "echarts";
export default {
  name: "home",
  data() {
    return {
      userimg: require("../../assets/images/qcw.jpeg"),
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 200,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 900,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 200,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 900,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        // console.log('AA',data.videoData);
        const xData = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series = [];

        //折线图
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });

        const option = {
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: keyArray,
          },
          series,
        };
        //绘制
        const E = echarts.init(this.$refs.echarts);
        E.setOption(option);

        //用户图
        const userOption = {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: data.userData.map(item => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLineL: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [{
            name:'新增用户',
            data:data.userData.map(item => item.new),
            type:'bar'
          },{
            name:'活跃用户',
            data:data.userData.map(item => item.active),
            type:'bar'
          }],
        };
        const U  = echarts.init(this.$refs.userEcharts)
        U.setOption(userOption)

        // 饼图
        const videoOption ={
          tooltip:{
            trigger:'item',
          },
          color:[
            '#0f78f4',
            '#dd536d',
            '#9462e5',
            '#a6a6a6',
            '#e1bb22',
            '#39c362',
            '#3ed1cf',
          ],
          series:[{
            data:data.videoData,
            type:'pie'
          }],
        }

        const V =echarts.init(this.$refs.videoEcharts)
        V.setOption(videoOption)
      }

      // console.log(res);
    });
  },
};
</script>



<style  lang="less" scoped>
.home {
  display: flex;
  margin: 0;
}
.el-col {
  margin-top: 20px;

  .user {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgb(37, 46, 35);
    .userImg {
      width: 30%;
      border-radius: 100%;
    }
    .userInfo {
      padding: 0 50px;
    }
  }
  .loginInfo {
    p {
      color: rgb(94, 90, 90);
      span {
        color: #000;
      }
    }
  }
  // 右上
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    .el-card {
      width: 32%;
      margin-bottom: 10px;
      .icon {
        width: 30%;
        text-align: center;
        padding: 20px 0;
        &::before {
          color: #fff;
          font-size: 30px;
        }
      }
      .detail {
        padding: 10px;
        p {
          margin: 0px;
        }
        .num {
          font-size: 24px;
        }
        .txt {
          font-size: 8px;
        }
      }
    }
  }
  .graph {
    .el-card {
      width: 48%;
    }
  }
}
</style>>

