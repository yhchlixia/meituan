<template>
  <div id="res-envelope">
    <div class="attention-bg" v-if="noData">
      <div class="no-data">
        <img
          src="http://img5.imgtn.bdimg.com/it/u=482517819,4006258038&fm=15&gp=0.jpg"
          alt="找不到图片啦"
        />
        <p>您当前没有红包奥</p>
        <div class="nodata-toNotHave">
          <p>
            <span>没有更多无效红包了</span>
          </p>
        </div>
      </div>
    </div>
    <div class="attention-bg-data" v-if="!noData">
      <div class="red-envelope-list">
        <div class="red-envelope-li" v-for="envelope in envelopes" :key="envelope.id">
          <div class="modal-style left"></div>
          <div class="red-envelope-li-context">
            <div class="red-envelope-li-context-left">
              <p class="red-envelope-li-context-p">{{envelope.title}}</p>
              <span class="red-envelope-li-context-span">有效期至{{envelope.toTime}}</span>
            </div>
            <div class="red-envelope-li-context-right">
              <p class="red-envelope-li-context-right-p">
                <span>￥</span>
                {{envelope.amount}}
              </p>
              <span class="red-envelope-li-context-span">{{envelope.role}}</span>
            </div>
          </div>
          <div class="red-envelope-li-context-footer">
            <p>限非到店自取订单使用。限登录和收餐手机号为{{envelope.tel}}使用</p>
          </div>
          <div class="use">
            <div class="use-in">
              <p>{{envelope.reson}}</p>
            </div>
          </div>
          <div class="modal-style right"></div>
        </div>
      </div>
      <div class="data-toNotHave">
        <p>没有更多无效红包了</p>
      </div>
    </div>
  </div>
</template>
<script>
import storeList from "@/components/store-list";
export default {
  data() {
    return {
      msg: "attention",
      envelopes: [
        {
          id: 0,
          title: "会员延期红包",
          toTime: "2020.05.21",
          amount: 5,
          role: "无门槛",
          tel: "17794248039",
          reson: "已使用"
        },
        {
          id: 1,
          title: "会员延期红包",
          toTime: "2020.05.21",
          amount: 5,
          role: "无门槛",
          tel: "17794248039",
          reson: "已使用"
        },
        {
          id: 2,
          title: "会员延期红包",
          toTime: "2020.05.21",
          amount: 5,
          role: "无门槛",
          tel: "17794248039",
          reson: "已使用"
        },
        {
          id: 3,
          title: "便利店专享红包",
          toTime: "2020.05.21",
          amount: 8,
          role: "无门槛",
          tel: "17794248039",
          reson: "已过期"
        }
      ],
      haveCanSend: true,
      noCanSend: false,
      noData: true
    };
  },
  components: { storeList },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.noData = false;
    }
  }
};
</script>
<style scoped>
#res-envelope {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 240, 240);
  color: rgb(184, 183, 183);
}
.attention-bg {
  width: 100%;
  min-height: calc(100% - 70px);
  background-color: #fff;
  position: relative;
}
.attention-bg > .no-data {
  width: 100%;
  display: inline-block;
  height: 160px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.attention-bg > .no-data > img {
  width: 60%;
  height: 60%;
}
.attention-bg-data {
  min-height: calc(100% - 70px);
}
.attention-bg-data > p {
  padding: 10px;
  font-size: 12px;
}
.attention-bg-data-list {
  background-color: #fff;
  padding: 0 10px;
}
.nodata-toNotHave {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  text-align: center;
  height: 70px;
  width: 100%;
  color: black;
}
.data-toNotHave {
  text-align: center;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  color: black;
}
.red-envelope-list {
  padding: 10px 10px 0 10px;
  width: calc(100% - 20px);
}
.red-envelope-li {
  background-color: #fff;
  padding: 10px 15px;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;
}
.modal-style {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(241, 240, 240);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
.left {
  left: -5px;
}
.right {
  right: -5px;
}
.red-envelope-li-context {
  display: flex;
  width: 100%;
  height: calc(100% - 30px);
  border-bottom: 1px dashed #999;
}
.red-envelope-li-context-left {
  flex: 1;
}
.red-envelope-li-context-right {
  width: 50px;
}
.red-envelope-li-context-p {
  font-size: 20px;
}
.red-envelope-li-context-right-p > span {
  font-size: 18px;
}
.red-envelope-li-context-right-p {
  font-size: 30px;
}
.red-envelope-li-context-span {
  font-size: 12px;
}
.red-envelope-li-context-footer {
  width: 100%;
  height: 20px;
}
.red-envelope-li-context-footer > p {
  width: 100%;
  font-size: 10px;
  color: #666;
  line-height: 30px;
}
.use {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #333;
  position: absolute;
  bottom: 35px;
  right: 10px;
}
.use-in {
  border: 1px solid #999;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  margin: 5px;
}
.use-in > p {
  line-height: 40px;
  color: #333;
  font-size: 12px;
}
</style>