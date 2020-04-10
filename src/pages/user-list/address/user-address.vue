<template>
  <div id="user-address">
    <div class="user-address-list">
      <div class="user-address-li" v-for="item in addresses" :key="item.id">
        <div class="user-address-li-base">
          <div class="user-address-li-base-top">
            <span class="addressName">{{item.addressName}}</span>
            <span class="house">{{item.house}}</span>
          </div>
          <div class="user-address-li-base-bottom">
            <span class="name">{{item.name}}</span>
            <span class="sex">{{item.sex}}</span>
            <span class="tel">{{item.tel}}</span>
          </div>
        </div>
        <div class="user-address-li-edit">
          <button @click="userAddress(item)">
            <wux-icon type="md-create" size="16px" color="#ccc"></wux-icon>
          </button>
        </div>
      </div>
      <div class="user-address-li-footer"></div>
    </div>
    <div class="user-address-footer">
      <button @click="userAddress()">
        <wux-icon color="orange" size="22px" type="md-add-circle-outline"></wux-icon>新增收货地址
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "user-adress",
      userBase: {
        id: "",
        addressName: "",
        house: "",
        name: "",
        tel: "",
        sex: "先生",
        userLabel: ""
      },
      addresses: [
        {
          id: 1,
          addressName: "新安花苑一区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        },
        {
          id: 2,
          addressName: "新安花苑二区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        },
        {
          id: 3,
          addressName: "新安花苑三区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        },
        {
          id: 4,
          addressName: "新安花苑四区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        },
        {
          id: 5,
          addressName: "新安花苑五区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        },
        {
          id: 6,
          addressName: "新安花苑六区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        },
        {
          id: 7,
          addressName: "兰州市七里河区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'school'
        },
        {
          id: 8,
          addressName: "甘肃省天水市麦积区",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'company'
        },
        {
          id: 9,
          addressName: "东方闻会员",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        },
        {
          id: 10,
          addressName: "河瑭新村",
          house: 333,
          name: "闫宏超",
          tel: "177****8039",
          sex: "先生",
          userLabel: 'home'
        }
      ]
    };
  },
  methods: {
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
    }
  }
};
</script>
<style scoped>
#user-address {
}
.user-address-li-footer {
  height: 50px;
  width: 100%;
}
.user-address-footer ._wux-icon {
  margin-right: 10px;
}
.user-address-list {
  width: calc(100% - 20px);
  min-height: 700px;
  padding: 0 10px;
}
.user-address-list > .user-address-li:first-child {
  border-top: 1px solid #ccc;
}
.user-address-li {
  height: 80px;
  width: 100%;
  margin: 0 -10px;
  padding: 0 10px;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #ccc;
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
.user-address-li-base {
  flex: 1;
  font-size: 14px;
}
.user-address-li-edit {
  width: 50px;
  height: 100%;
}
.user-address-li-edit > button {
  float: right;
  margin-top: 30px;
  border: 3px solid #ccc;
  border-radius: 2px;
  height: 20px;
  width: 20px;
  padding: 0;
  background-color: #fff;
}
.user-address-li-edit > button:after {
  border: none;
  padding: 0;
  margin: 0;
}
.user-address-li-edit > button > ._wux-icon {
  position: relative;
  top: -18px;
}
.user-address-li-base-top {
  padding-top: 15px;
}
.user-address-li-base-top > .addressName {
  margin-right: 10px;
}
.user-address-li-base-bottom {
  padding-top: 10px;
  color: #666;
}
.user-address-li-base-bottom > .name {
  margin-right: 10px;
}
.user-address-li-base-bottom > .sex {
  margin-right: 20px;
}
</style>