<template>
  <div id="map">
    <div class="map-search">
      <div class="map-search-name">
        <span style="font-size: 12px; margin-right: 5px;">{{addressName}}</span>
        <wux-icon type="md-arrow-dropdown" size="12px" color="#ccc"></wux-icon>
      </div>
      <div class="map-search-input">
        <wux-icon type="md-search" size="12px" color="#999"></wux-icon>
        <input
          type="text"
          @focus="cancle(false)"
          placeholder="请输入您的地址"
          placeholder-style="color: #999;font-size: 12px;"
          v-model="searchAddress"
        />
      </div>
      <div class="map-search-canle" @click="cancle(true)" v-if="isCancle">
        <span>取消</span>
      </div>
    </div>
    <map
      class="map-size"
      name="address"
      :longitude="currentAddress.longitude"
      :latitude="currentAddress.latitude"
      :markers="markers"
    ></map>
    <div class="map-address-list">
      <scroll-view scroll-y="true" class="sceoll-view" @scrolltolower="bindscrolltolower()">
      <div class="map-address-top">
        <div></div>
      </div>
      <div
        v-for="address in addresses"
        :key="address.id"
        class="map-address-li"
        @click="chooseAddress(address)"
      >
        <div class="map-address-li-left">
          <p>{{address.title}}</p>
          <p>{{address.address}}</p>
        </div>
        <div class="map-address-li-right">
          <div class="address-sex-two">
            <div
              class="address-sex-two-radio"
              :class="{'address-sex-two-radio-out' : address.title === addressEdit.addressName}"
            >
            <div class="address-sex-two-radio-in" v-if="address.title === addressEdit.addressName"></div></div>
          </div>
        </div>
      </div>
      <div class="map-loading">
        <div class="map-loading-left"></div>
        <div class="map-loading-middle"></div>
        <div class="map-loading-right"></div>
      </div>
      </scroll-view>
    </div>
  </div>
</template>
<script>
var QQMapWX = require('../../../../../static/map/qqmap-wx-jssdk.js');
var qqmapsdk;
qqmapsdk = new QQMapWX({
    key: 'ZOLBZ-YAFHO-KEHWJ-SPOVW-YZKAF-RIFEM'
});
export default {
  data() {
    return {
      msg: 1,
      currentAddress: {},
      markers: [],
      addressName: "无锡",
      searchAddress: "",
      isCancle: false,
      lock: false,
      addressDN: "",
      addresses: [],
      addressEdit: {}
    };
  },
  onLoad(option) {
    const that = this;
    qqmapsdk.search({
      keyword: "公司",
      success(res) {
        that.addresses = res.data;
      },
      fail(res) {
        console.log(res, 2);
      }
    })
    this.addressEdit = JSON.parse(option.obj);
    wx.getLocation({
      type: "wgs84",
      success(res) {
        that.currentAddress = res;
        const marker = {
          id: 0,
          longitude: res.longitude,
          latitude: res.latitude,
          iconPath: "/static/images/location.png",
          width: 50,
          height: 50,
          anchor: { x: 0.5, y: 1 }
        };
        that.markers = [marker];
      }
    });
  },
  methods: {
    cancle(cancle) {
      this.isCancle = !cancle;
    },
    myAddress(address) {
      console.log(address);
    },
    chooseAddress(address) {
      const eventChannel = this.$mp.page.getOpenerEventChannel();
      eventChannel.emit("chooseAddress", { address: address });
      wx.navigateBack({
        delta: 1,
        success(res) {
          console.log(res);
        },
        fail() {
          console.log(res);
        }
      });
    },
    bindscrolltolower() {
      const _this = this;
      let index = (this.addresses.length) / 10 + 1;
      qqmapsdk.search({
        keyword: "公司",
        page_index: index,
        success(res) {
          _this.addresses = _this.addresses.concat(res.data);
        },
        fail(res) {
          console.log(res, 2);
        }
      })
    }
  }
};
</script>
<style scoped>
#map {
  height: 100%;
  width: 100%;
}
.map-lock {
  background-color: #eee;
}
.sceoll-view {
  width: 100%;
  height: 100%;
}
.map-search {
  background-color: #fff;
  width: calc(100% - 20px);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 10px;
  display: flex;
}
.map-search-name {
  width: 44px;
  display: inline-block;
  line-height: 50px;
}
.map-search-input {
  flex: 1;
  position: relative;
  padding: 10px 0;
}
.map-search-input ._wux-icon {
  position: absolute;
  left: 10px;
  line-height: 30px;
}
.map-search-input input {
  background-color: #eee;
  height: 30px;
  border-radius: 15px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 12px;
}
.map-size {
  width: 100%;
  height: 350px;
}
.map-search-canle {
  width: 40px;
  font-size: 12px;
  display: inline-block;
  line-height: 50px;
  color: #999;
  text-align: right;
}
.map-address-list {
  width: calc(100% - 20px);
  height: calc(100% - 320px);
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  padding-top: 0;
}
.map-address-li {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.map-address-li-right {
  width: 50px;
}
.map-address-li-left {
  flex: 1;
  max-width: calc(100% - 50px);
  padding: 10px 0;
}
.map-address-li-left > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.map-address-li-left > p:first-child {
  height: 30px;
}
.map-address-li-left > p:nth-child(2) {
  line-height: 20px;
  font-size: 12px;
  color: #999;
}
.map-address-li-right > input {
  margin: 20px 12.5px;
}
.map-loading {
  width: 100%;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  text-align: center;
  
}
.map-loading-left {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border-radius: 3px;
  animation: myfirst 1s;
  -webkit-animation: myfirst 1s infinite;
}
.map-loading-middle {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border-radius: 3px;
  animation: mysecond 1s;
  -webkit-animation: mysecond 1s infinite;
}
.map-loading-right {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border-radius: 3px;
  animation: mythird 1s;
  -webkit-animation: mythird 1s infinite;
}
@keyframes myfirst {
  0% {
    background: #333;
  }
  25% {
    background: #888;
  }
  50% {
    background: #ddd;
  }
  75% {
    background: #888;
  }
  100% {
    background: #333;
  }
}
@keyframes mysecond {
  0% {
    background: #888;
  }
  25% {
    background: #333;
  }
  50% {
    background: #888;
  }
  75% {
    background: #ddd;
  }
  100% {
    background: #888;
  }
}
@keyframes mythird {
  0% {
    background: #ddd;
  }
  25% {
    background: #888;
  }
  50% {
    background: #333;
  }
  75% {
    background: #888;
  }
  100% {
    background: #ddd;
  }
}
.map-address-top {
  position: sticky;
  top: 0;
  height: 20px;
  width: 100%;
  text-align: center;
  line-height: 20px;
  background-color: #fff;
  z-index: 1000;
}
.map-address-top > div {
  width: 25px;
  height: 4px;
  margin-top: 5px;
  display: inline-block;
  border-top: 3px solid #666;
  border-bottom: 3px solid #666;
}
.address-sex-two {
  display: inline-block;
  width: 50%;
  height: 100%;
  line-height: 70px;
}
.address-sex-two-radio {
  border: 1px solid #999;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: inline-block;
  line-height: 70px;
  margin-right: 5px;
}
.address-sex-two-radio-out {
  border-color: orange;
}
.address-sex-two-radio-in {
  width: 10px;
  height: 10px;
  background-color: orange;
  border-radius: 50%;
  margin: 3px;
}
</style>