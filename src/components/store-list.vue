<template>
  <div id="store">
    <div>
      <wux-row>
        <wux-col span="3">
          <div class="store-image">
            <img :src="storeInfo.imgUrl" alt />
          </div>
        </wux-col>
        <wux-col span="9">
          <div class="store-info">
            <lebel class="store-info-label">{{storeInfo.storeName}}</lebel>
            <div class="store-info-sort">
              <wux-icon type="md-star" size="12" color="orange"></wux-icon>
              <span style="margin-left:5px">{{storeInfo.starNum}}</span>
              <span style="margin-left:15px">月销{{storeInfo.monthNum}}</span>
              <span style="float:right;margin-left:15px;">{{storeInfo.distance}}</span>
              <span style="float:right;">{{storeInfo.deliveryTime}}分钟</span>
            </div>
            <div class="store-info-money">
              <span>起送￥{{storeInfo.amount.initAmount}}</span>
              <span>配送￥{{storeInfo.amount.deliveryFee}}</span>
              <span>人均￥{{storeInfo.amount.perCapitaAmount}}</span>
              <div class="store-info-money-pick" v-if="storeInfo.pick">美团专送</div>
            </div>
            <div class="store-info-type">
              <wux-icon type="md-home" size="12" color="#333"></wux-icon>
              <span style="margin-left:5px">{{storeInfo.storeType}}</span>
            </div>
            <div class="store-info-discount">
              <div style="flex:1;">
                <div
                  class="store-info-discount-span"
                  v-for="item in discount"
                  :key="item.id"
                ><div v-if="item.allowance">津贴</div>{{item.label}}</div>
              </div>
              <div class="store-info-discount-sum" @click="toChangeNum">
                <wux-icon v-if="showEasy" type="md-arrow-dropdown" size="14"></wux-icon>
                <wux-icon v-if="showSum" type="md-arrow-dropup" size="14"></wux-icon>
              </div>
            </div>
          </div>
        </wux-col>
      </wux-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    storeInfo: Object
  },
  data() {
    return {
      msg: "hello",
      showSum: false,
      showEasy: true,
      discount: []
    };
  },
  created() {
      this.loadData();
  },
  methods: {
      loadData() {
          this.discounts = this.storeInfo.discounts;
          console.log(this.discounts);
          if (this.showEasy) {
              this.discount = this.discounts.slice(0,4);
          } else {
              this.discount = this.storeInfo.discounts;
          }
      },
      toChangeNum() {
          this.showEasy = this.showSum;
          this.showSum = !this.showSum;
          this.loadData();
      }
  }
};
</script>
<style scoped>
#store {
  padding: 10px 0;
}
.store-image {
  padding: 0 10px 0 0;
}
.store-image > img {
  width: 100%;
  height: 60px;
}
.store-info {
  width: 100%;
}
.store-info-label {
  font-weight: bold;
  font-size: 16px;
}
.store-info-sort {
  font-size: 10px;
  height: 20px;
}
.store-info-money {
  font-size: 10px;
  height: 20px;
}
.store-info-money-pick {
  background-color: rgb(238, 172, 50);
  width: 50px;
  float: right;
  text-align: center;
  border-radius: 5px 0 5px 0;
}
.store-info-type {
  font-size: 10px;
}
.store-info-discount {
  display: flex;
}
.store-info-discount-span {
  display: inline-block;
  border: 1px solid red;
  padding-right: 3px;
  font-size: 12px;
  color: red;
  margin: 5px 5px 0 0;
}
.store-info-discount-sum {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
}
.store-info-discount-span>div {
    background-color: rgb(245, 174, 174);
    height: 100%;
    display: inline-block;
    padding: 0 3px 0 3px;
}
</style>