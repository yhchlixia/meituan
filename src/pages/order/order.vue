<template>
  <div id="order">
    <div class="title">
      <wux-tabs :current="current" controlled @change="tabsChange">
        <block v-for="tab in tabs" :key="tab.key">
          <wux-tab :key="tab.key" :title="tab.title"></wux-tab>
        </block>
      </wux-tabs>
    </div>
    <div class="content">
      <div v-for="order in orderList" :key="order.orderId">
        <div class="content-label">
          <div class="content-label-img">
            <img :src="order.imgURL" alt />
          </div>
          <div class="content-label-label">
            <div class="content-label-label-label">
              <div style="width:182px;">
                <p>{{order.storeName}}</p>
                <img src="/static/images/next.png" />
              </div>
              <div
                class="content-label-label-label-status"
                :class="{'refund-label' : order.orderStatus === 'Refund'}"
              >{{order.orderStatus}}</div>
            </div>
          </div>
        </div>
        <div class="content-com">
          <div class="content-com-content">
            <wux-row v-for="(item, index_) in order.orderContent" :key="index_">
              <wux-col span="11">
                <div class="com-name">{{item.comName}}</div>
              </wux-col>
              <wux-col span="1">
                <div class="com-number">{{item.number}}</div>
              </wux-col>
            </wux-row>
            <p
              style="font-size:10px;text-align:right;"
            >共{{order.orderContent.length}}件商品，实付￥{{order.amount}}</p>
          </div>
        </div>
        <div class="content-button">
          <button>再来一单</button>
          <button class="content-button-comment" v-if="order.comment">去评论</button>
          <button class="content-button-comment" v-if="order.refund">退款详情</button>
        </div>
      </div>
    </div>
    <div class="order-loading" v-if="false">
      <wux-spin wux-class="spin" />
    </div>
    <div v-if="all && !bottom" class="time-limit">
      <wux-divider>
        <view class="loadmore">
          <text class="text">最多显示一年的交易订单</text>
        </view>
      </wux-divider>
    </div>
    <div v-if="bottom" class="bottom">
      <wux-divider>
        <view class="loadmore">
          <text class="text">已经到底啦</text>
        </view>
      </wux-divider>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: "allOrder",
      tabs: [
        {
          key: "allOrder",
          title: "全部订单"
        },
        {
          key: "comment",
          title: "待评价"
        },
        {
          key: "refund",
          title: "退款"
        }
      ],
      orderStatus: [
        {
          key: "Success",
          value: "订单已完成"
        },
        {
          key: "Refund",
          value: "退款成功"
        },
        {
          key: "Cancel",
          value: "订单已取消"
        },
        {
          key: "Delivery",
          value: "配送中"
        }
      ],
      orderList: [],
      all: false,
      bottom: false
    };
  },
  onLoad() {
    this.loadData(0, 20);
  },
  methods: {
    loadData(index, limit, key = "allOrder") {
      this.$api.order.searchOrder(index, limit, key).then(res => {
        this.all = res.length < 5;
        this.orderList = this.orderList.concat(res);
        this.orderList.forEach(element => {
          if (element.orderStatus === "Success") {
            element.orderStatus = this.orderStatus[0].value;
          }
        });
        console.log(this.orderStatus);
        this.bottom = this.orderList.length > 0 && this.orderList.length < 3;
      });
    },
    tabsChange(e) {
      this.current = e.mp.detail.key;
      this.orderList = [];
      this.loadData(0, 20, this.current);
    }
  },
  onReachBottom() {
    let index = this.orderList.length;
    this.loadData(index, 10, this.current);
  }
};
</script>
<style scoped>
#order {
  width: 100%;
  min-height: 100%;
  background-color: #fff;
}
.title {
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
}
.content-label {
  height: 40px;
  width: 100%;
  padding: 10px;
}
.content-label-img {
  width: 50px;
  height: 40px;
  display: inline-block;
}
.content-label-img > img {
  width: 40px;
  height: 100%;
}
.content-label-label {
  display: inline-block;
  height: 40px;
  width: calc(100% - 70px);
}
.content-label-label-label {
  display: inline-block;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.content-label-label-label > div {
  display: inline-block;
}
.content-label-label-label > div > p {
  max-width: 170px;
  height: 100%;
  line-height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
}
.content-label-label-label > div > img {
  width: 12px;
  height: 12px;
  position: relative;
  top: -14px;
}
.content-label-label-label-status {
  display: inline-block;
  line-height: 40px;
  width: calc(100% - 182px);
  height: 40px;
  position: relative;
  top: -14px;
  text-align: right;
}
.content-com {
  width: calc(100% - 20px);
  padding: 0 10px 10px 10px;
  min-height: 50px;
}
.content-com-content {
  width: calc(100% - 50px);
  position: relative;
  right: -50px;
}
.com-name {
  width: 100%;
  height: 100%;
  font-size: 12px;
  margin-bottom: 5px;
}
.com-number {
  width: 100%;
  height: 100%;
  font-size: 12px;
  text-align: right;
  margin-bottom: 5px;
}
.content-button {
  padding: 10px;
  width: calc(100% - 20px);
  text-align: right;
  border-bottom: 1px solid #ccc;
}
.content-button > button {
  width: 80px;
  margin-left: 10px;
  font-size: 12px;
  display: inline-block;
  border-radius: 0;
  background-color: #fff;
}
.content-button > button::after {
  border-radius: 0;
}
#order .content-button-comment {
  background-color: rgb(252, 200, 57);
}
.order-loading {
  width: 100%;
  text-align: center;
  padding: 10px 0;
}
.time-limit {
  padding: 10px 0;
}
.loadmore {
  font-size: 12px;
}
.bottom {
  padding: 10px 50px;
}
#order .refund-label {
  color: rgb(252, 200, 57);
}
</style>