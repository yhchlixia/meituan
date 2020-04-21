<template>
    <div id="choose-address">
        <div class="choose-address-search">
            <div class="choose-address-search-left">
                <img class="choose-address-search-left-address" src="/static/images/address.png" alt="">
                <span>{{msg.ad_info.city}}</span>
                <img class="choose-address-search-left-down" src="/static/images/down.png" alt="">
            </div>
            <div class="choose-address-search-right">
                <input @focus="toInputAddress" @blur="hiddenClear" type="text" v-model="address" class="search-input" placeholder="请输入收货地址">
                <img class="icon-search" src="/static/images/search.png" alt="">
                <img v-if="clear" @click="clearInput()" class="icon-clear" src="/static/images/delete.png" alt="">
            </div>
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
            clear: false
        }
    },
    onLoad(option) {
        this.msg = JSON.parse(option.obj);
        console.log(this.msg);
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
        },
        toInputAddress() {
            if (this.address !== '') {
                this.clear = true;
            }
        },
        hiddenClear() {
            this.clear = false;
        },
        clearInput() {
            debugger
            this.address = '';
        }

    }
}
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
    position: fixed;
    top: 0;
    /* z-index: 1000; */
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
</style>