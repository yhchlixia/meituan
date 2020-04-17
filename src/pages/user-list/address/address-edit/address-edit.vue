<template>
  <div id="address-edit">
    <form>
      <div class="address-edit-li" :class="{'address-DN' : userBases.addressDN}">
        <label class="address-edit-li-label">收货地址：</label>
        <div class="address-edit-li-input" @click="toChooseAddress(userBases)">
          <wux-icon
            v-if="!userBases.addressDN"
            class="address-edit-li-icon"
            type="md-pin"
            size="14px"
            color="#ccc"
          ></wux-icon>
          <p
            class="addressName"
            :class="{'address-DN-input' : userBases.addressDN}"
          >{{userBases.addressName || '请输入收货地址'}}</p>
          <p v-if="userBases.addressDN" class="addressDN">{{userBases.addressDN}}</p>
          <wux-icon
            class="address-edit-li-icon on"
            type="md-arrow-forward"
            size="14px"
            color="#ccc"
          ></wux-icon>
        </div>
      </div>
      <div class="address-edit-li">
        <label class="address-edit-li-label">门牌号：</label>
        <div class="address-edit-li-input">
          <input
            class="addressName padding"
            placeholder="详细地址，例如1层101室"
            placeholder-style="font-size: 14px;"
            id="addressName"
            name="addressName"
            type="text"
            v-model="userBases.house"
            @focus="inputValue('house')"
            @blur="blur()"
          />
          <wux-icon
            @click="clear('house')"
            v-if="showClearHouse"
            class="input-clear"
            color="#aaa"
            type="md-close-circle"
            size="14px"
          ></wux-icon>
        </div>
      </div>
      <div class="address-edit-li">
        <label class="address-edit-li-label">标签：</label>
        <div class="address-edit-li-input">
          <button
            class="laber-button"
            @click="chooseLabel('home')"
            :class="{'choose-success' : userBases.userLabel === 'home'}"
          >家</button>
          <button
            class="laber-button"
            @click="chooseLabel('company')"
            :class="{'choose-success' : userBases.userLabel === 'company'}"
          >公司</button>
          <button
            class="laber-button"
            @click="chooseLabel('school')"
            :class="{'choose-success' : userBases.userLabel === 'school'}"
          >学校</button>
        </div>
      </div>
      <div class="address-edit-li">
        <label class="address-edit-li-label">联系人：</label>
        <div class="address-edit-li-input name-padding">
          <input
            class="addressName padding"
            placeholder="请填写收货人的姓名"
            placeholder-style="font-size: 14px;"
            id="addressName"
            name="addressName"
            type="text"
            v-model="userBases.name"
            @focus="inputValue('name')"
            @blur="blur()"
          />
          <wux-icon
            @click="clear('name')"
            v-if="showClearName"
            class="input-clear name"
            color="#aaa"
            type="md-close-circle"
            size="14px"
          ></wux-icon>
          <div class="address-sex">
            <div class="address-sex-two" @click="chooseSex('先生')">
              <div
                class="address-sex-two-radio"
                :class="{'address-sex-two-radio-out' : userBases.sex === '先生'}"
              >
                <div class="address-sex-two-radio-in" v-if="userBases.sex === '先生'"></div>
              </div>
              <span>先生</span>
            </div>
            <div class="address-sex-two" @click="chooseSex('女士')">
              <div
                class="address-sex-two-radio"
                :class="{'address-sex-two-radio-out' : userBases.sex === '女士'}"
              >
                <div class="address-sex-two-radio-in" v-if="userBases.sex === '女士'"></div>
              </div>
              <span>女士</span>
            </div>
          </div>
        </div>
      </div>
      <div class="address-edit-li">
        <label class="address-edit-li-label">手机号：</label>
        <div class="address-edit-li-input">
          <input
            class="addressName padding"
            placeholder="请填写收货人手机号码"
            placeholder-style="font-size: 14px;"
            id="addressName"
            name="addressName"
            type="text"
            v-model="userBases.tel"
            @focus="inputValue('tel')"
            @blur="blur()"
          />
          <wux-icon
            @click="clear('tel')"
            v-if="showClearTel"
            class="input-clear"
            color="#aaa"
            type="md-close-circle"
            size="14px"
          ></wux-icon>
        </div>
      </div>
      <div class="address-edit-footer">
        <button @click="saveAddress()">保存地址</button>
        <button v-if="userBases.id" @click="deleteAddress()">删除地址</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "address Edit",
      userBases: {},
      showClearHouse: false,
      showClearName: false,
      showClearTel: false
    };
  },
  onLoad(option) {
    this.userBases = JSON.parse(option.obj);
    this.chooseSex(this.userBases.sex);
  },
  methods: {
    loadData() {
      // const eventChannel = this.getOpenerEventChannel();
      // eventChannel.on('acceptDataFromOpenerPage', function(data) {
      //     console.log(data)
      // })
    },
    toChooseAddress(item) {
      var obj = JSON.stringify(item);
      var _this = this;
      wx.navigateTo({
        url: "/pages/user-list/address/map/main?obj=" + obj,
        events: {
          chooseAddress: function(data) {
            _this.userBases.addressName = data.address.title;
            _this.userBases.addressDN = data.address.address;
          }
        },
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log(res);
        }
      });
    },
    chooseLabel(label) {
      switch (label) {
        case "home":
          this.userBases.userLabel = label;
          break;
        case "company":
          this.userBases.userLabel = label;
          break;
        case "school":
          this.userBases.userLabel = label;
          break;
        default:
          break;
      }
    },
    chooseSex(sex) {
      this.userBases.sex = sex;
    },
    
    inputValue(item) {
      switch (item) {
        case 'house':
          if (this.userBases.house !== '') {
            this.showClearHouse = true;
          }
          break;
        case 'name':
          if (this.userBases.name !== '') {
            this.showClearName = true;
          }
          break;
        case 'tel':
          if (this.userBases.tel !== '') {
            this.showClearTel = true;
          }
          break;
        default:
          break;
      }
    },
    blur() {
      this.showClearHouse = false;
      this.showClearName = false;
      this.showClearTel = false;
    },
    clear(item) {
      debugger
      switch (item) {
        case 'house':
          this.userBases.house = "";
          break;
        case 'name':
          this.userBases.name = "";
          break;
        case 'tel':
          this.userBases.tel = "";
          break;
        default:
          break;
      }
    },
    saveAddress() {
      if (this.userBases.addressName === "") {
        wx.showToast({
          title: "请选择收货地址",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.userBases.house === "") {
        wx.showToast({
          title: "请填写详细地址",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.userBases.name === "") {
        wx.showToast({
          title: "请填写收货人姓名",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.userBases.tel === "") {
        wx.showToast({
          title: "请填写手机号",
          icon: "none",
          duration: 2000
        });
        return;
      }
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
    deleteAddress() {
      wx.navigateBack({
        delta: 1,
        success(res) {
          console.log(res);
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
#address-edit {
  width: calc(100% - 20px);
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
}
.address-edit-li {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.address-edit-li-label {
  width: 80px;
  line-height: 50px;
  font-size: 14px;
}
.input-clear {
  position: absolute;
  top: 15px;
  right: 15px;
}
.input-clear.name {
  right: 125px;
}
.address-edit-li-input {
  flex: 1;
  max-width: calc(100% - 80px);
  height: 100%;
  font-size: 14px;
  position: relative;
}
.addressName {
  padding: 0 15px;
  height: 100%;
  width: 100%;
  line-height: 50px;
  color: #999;
  font-size: 14px;
}
.address-DN-input.addressName {
  padding-left: 0;
  height: 50px;
  color: #000;
}
.address-edit-li-icon {
  position: absolute;
  top: 16px;
}
.address-edit-li-icon.on {
  right: 0;
}
.addressName.padding {
  padding: 0;
  color: #000;
}
.laber-button {
  background-color: #fff;
  font-size: 12px;
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  height: 30px;
}
.laber-button.choose-success {
  background-color: #ccc;
}
.address-edit-li-input.name-padding {
  display: flex;
}
.address-sex {
  width: 200px;
}
.address-sex-two {
  display: inline-block;
  width: 50%;
  height: 100%;
  line-height: 50px;
}
.address-sex-two-radio {
  border: 1px solid #999;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: inline-block;
  line-height: 50px;
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
.address-edit-footer > button {
  margin-top: 10px;
}
.address-edit-footer > button:first-child {
  background-color: orange;
}
.address-edit-footer > button:nth-child(2) {
  background-color: #eee;
}
.addressDN {
  font-size: 12px;
  color: #999;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.address-DN.address-edit-li {
  height: 80px;
}
</style>