<template>
  <div id="choose-address">
    <div class="choose-address-search">
      <div class="choose-address-search-left">
        <img class="choose-address-search-left-address" src="/static/images/address.png" alt />
        <span>{{msg.ad_info.city}}</span>
        <img class="choose-address-search-left-down" src="/static/images/down.png" alt />
      </div>
      <div class="choose-address-search-right">
        <input
          @focus="toInputAddress"
          @blur="hiddenClear"
          type="text"
          v-model="address"
          class="search-input"
          placeholder="请输入收货地址"
        />
        <img class="icon-search" src="/static/images/search.png" alt />
        <div class="clear">
          <img
            v-show="clear"
            @click="clearInput()"
            class="icon-clear"
            src="/static/images/delete.png"
            alt
          />
        </div>
      </div>
    </div>
    <div v-if="search" class="search-list">
      <div class="my-address-li" v-for="address in searchAddress" :key="address.id" @click="selectedAddress(address.title)">
        <p>{{address.title}}</p>
        <div class="address-distance">{{address.distance }}千米</div>
        <div class="my-address-li-base">
          <p>{{address.address}}</p>
        </div>
      </div>
    </div>
    <div class="choose-address-context" v-if="!search">
      <div class="choose-address-context-location">
        <p>{{msg.formatted_addresses.recommend}}</p>
        <div class="re-location" @click="selectedAddress(msg.formatted_addresses.recommend)">
          <img src="/static/images/location-choose.png" alt />
          <p>重新定位</p>
        </div>
      </div>
      <div class="my-address">
        <div class="my-address-label">
          <img src="/static/images/house.png" alt />
          <p>我的收货地址</p>
        </div>
        <div class="my-address-list" :class="{'allAddress': showAllAddress}">
          <div class="my-address-li" v-for="address in addresses" :key="address.id" @click="selectedAddress(address.addressName)">
            <p>{{address.addressName}}</p>
            <div class="my-address-li-base">
              <span>{{address.name}}</span>
              <span>{{address.sex}}</span>
              <span>{{address.tel}}</span>
            </div>
          </div>
        </div>
        <div class="my-address-footer" :class="{'allAddress': showAllAddress}" @click="allAddress">
          <p>{{showAllAddress? '收起全部地址' : '展开全部地址'}}</p>
          <img v-if="!showAllAddress" src="/static/images/down.png" alt />
          <img v-if="showAllAddress" src="/static/images/up.png" alt />
        </div>
      </div>
      <div class="my-address">
        <div class="my-address-label">
          <img src="/static/images/house.png" alt />
          <p>附近收货地址</p>
        </div>
        <div class="my-address-list allAddress">
          <div class="my-address-li" v-for="address in nearbyAddresses" :key="address.id" @click="selectedAddress(address.title)">
            <p>{{address.title}}</p>
            <div class="my-address-li-base">
              <span>{{address.address}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-address-footer" v-if="!search">
      <button @click="userAddress()">
        <wux-icon color="orange" size="22px" type="md-add-circle-outline"></wux-icon>新增收货地址
      </button>
    </div>
  </div>
</template>
<script>
var QQMapWX = require('../../../../static/map/qqmap-wx-jssdk.js');
var qqmapsdk;
qqmapsdk = new QQMapWX({
    key: 'ZOLBZ-YAFHO-KEHWJ-SPOVW-YZKAF-RIFEM'
});
export default {
  data() {
    return {
      msg: "choose address",
      userBase: {
        id: "",
        addressName: "",
        house: "",
        name: "",
        tel: "",
        sex: "先生",
        userLabel: ""
      },
      address: "",
      clear: false,
      addresses: [
        {
          id: 1,
          addressName: "新安花苑一区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 2,
          addressName: "新安花苑二区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 3,
          addressName: "新安花苑三区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 4,
          addressName: "新安花苑四区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 5,
          addressName: "新安花苑五区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 6,
          addressName: "新安花苑六区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 7,
          addressName: "兰州市七里河区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "school",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 8,
          addressName: "甘肃省天水市麦积区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "company",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 9,
          addressName: "东方闻会员",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        },
        {
          id: 10,
          addressName: "河瑭新村",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: "home",
          addressDN: "江苏省无锡市新吴区中国传感网国际创新园1"
        }
      ],
      showAllAddress: false,
      nearbyAddresses: [],
      search: false,
      searchAddress: []
    };
  },
  watch: {
    address: function(val) {
      let that = this;
      if (val !== "") {
        this.clear = true;
        this.search = true;
        qqmapsdk.getSuggestion({
          keyword: val,
          region: this.msg.ad_info.city,
          policy: 1,
          page_size: 20,
          success(res) {
            res.data.forEach(element => {
              qqmapsdk.calculateDistance({
                to: [{
                  location: element.location
                }],
                mode: 'straight',
                success(res) {
                  element.distance = (res.result.elements[0].distance / 1000).toFixed(2);
                }
              })
            });
            that.searchAddress = res.data;
              console.log(that.searchAddress);
          }
        })
      } else {
        this.clear = false;
        this.search = false;
      }
    }
  },
  onLoad(option) {
    let that = this;
    that.showAllAddress = false;
    this.msg = JSON.parse(option.obj);
    qqmapsdk.search({
      keyword: "公司",
      success(res) {
        that.nearbyAddresses = res.data;
      }
    })
  },
  methods: {
    allAddress() {
      this.showAllAddress = !this.showAllAddress;
    },
    selectedAddress(address) {
      let _this = this;
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
    userAddress(item) {
      var userBase = item ? item : this.userBase;
      var obj = JSON.stringify(userBase);
      wx.navigateTo({
        url: "/pages/user-list/address/address-edit/main?obj=" + obj,
        success(res) {
          item
            ? wx.setNavigationBarTitle({
                title: "编辑收货地址"
              })
            : wx.setNavigationBarTitle({
                title: "新增收货地址"
              });
        },
        fail() {
          console.log(res);
        }
      });
    },
    toInputAddress() {
      if (this.address !== "") {
        this.clear = true;
      }
    },
    hiddenClear() {
      this.clear = false;
    },
    clearInput() {
      this.address = "";
    }
  }
};
</script>
<style scoped>
#choose-address {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.choose-address-search {
  width: calc(100% - 20px);
  height: 50px;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;
}
.search-list {
  width: calc(100% - 20px);
  min-height: 100%;
  background-color: #fff;
  padding: 10px;
}
.search-list > .my-address-li > p {
  display: inline-block;
  width: calc(100% - 70px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.address-distance {
  display: inline-block;
  width: 70px;
  font-size: 12px;
  color: #999;
  position: absolute;
  text-align: center;
}
.search-list > .my-address-li > span {
  font-size: 12px;
  color: #999;
}
.my-address-li-base {
  padding: 5px 0;
}
.my-address-li-base > span {
  font-size: 12px;
  color: #999;
}
.my-address-li-base > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 12px;
  color: #999;
}
.my-address-li-base > span:first-child {
  margin-right: 5px;
}
.my-address-li-base > span:nth-child(2) {
  margin-right: 25px;
}
.choose-address-search-left {
  width: 80px;
  line-height: 50px;
}
.choose-address-search-right {
  flex: 1;
  background-color: #fff;
  padding: 5px 0;
  position: relative;
}
.choose-address-search-left-address {
  width: 13px;
  height: 13px;
}
.choose-address-search-left-down {
  width: 10px;
  height: 10px;
}
.choose-address-context {
  width: 100%;
  background-color: #fff;
}
.choose-address-context-location {
  width: 100%;
  width: calc(100% - 20px);
  background-color: #fff;
  display: flex;
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
}
.choose-address-context-location > p {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}
.re-location {
  color: rgb(238, 174, 36);
  width: 100px;
  display: inline-block;
  text-align: right;
  font-size: 13px;
  line-height: 20px;
  position: relative;
}
.re-location > img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 60px;
}
.re-location > p {
  display: inline-block;
  height: 24.8px;
  line-height: 24.8px;
}
.my-address-label {
  width: calc(100% - 20px);
  height: 20px;
  position: relative;
}
.my-address {
  padding: 10px;
  width: calc(100% - 20px);
}
.my-address-label > img {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 15px;
  height: 15px;
}
.my-address-label > p {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  margin-left: 25px;
}
.my-address-list {
  width: calc(100% - 20px);
  padding: 10px 25px;
  height: 200px;
  overflow: hidden;
}
.allAddress.my-address-list {
  height: auto;
  overflow: auto;
}
.my-address-li {
  padding: 10px 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
}
.my-address-footer {
  width: calc(100% - 15px);
  padding: 0 0 10px 35px;
  border-bottom: 1px solid #ddd;
  margin: 0 -10px;
}
.my-address-footer > p {
  font-size: 13px;
  display: inline-block;
}
.my-address-footer > img {
  width: 12px;
  height: 12px;
  margin-left: 2px;
}
.choose-address-search-left > span {
  font-size: 13px;
  margin: 0 5px;
}
.search-input {
  display: inline-block;
  line-height: 40px;
  background-color: #eee;
  font-size: 13px;
  height: 40px;
  padding: 0 30px;
  width: calc(100% - 60px);
  border-radius: 3px;
}
.icon-search {
  width: 13px;
  height: 13px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto;
}
.user-address-footer ._wux-icon {
  margin-right: 10px;
}
.user-address-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.user-address-footer > button {
  border-radius: 0;
}
.user-address-footer > button::after {
  border-radius: 0;
}
.icon-clear {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  z-index: 1002;
}
.clear {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  margin: auto;
}
</style>