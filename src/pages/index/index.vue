<template>
  <!-- <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>-->
  <div id="index">
    <div class="user-address">
      <wux-icon type="md-pin" color="#cc9900" size="17" class="user-address-location"></wux-icon>
      <span>{{user.address}}</span>
      <wux-icon type="md-arrow-dropright" color="#ccc" size="15" class="to-choose-address"></wux-icon>
    </div>
    <wux-search-bar
      @click="toSearch"
      clear
      :placeholder="placeholder"
      placeholder-class="user-search"
      :showCancel="showCancel"
      disabled
    ></wux-search-bar>
    <div class="index-menu">
      <swiper :indicator-dots="indicatorDots">
        <block>
          <swiper-item>
            <view class="swiper-item">
              <wux-grids :bordered="bordered" col="5" square>
                <wux-grid v-for="item in indexMenu" :key="item">
                  <wux-icon type="logo-github" />
                  <view class="index-menu-label">{{item.label}}</view>
                </wux-grid>
              </wux-grids>
            </view>
          </swiper-item>
        </block>
        <block>
          <swiper-item>
            <view class="swiper-item">
              <wux-grids :bordered="bordered" col="5" square>
                <wux-grid v-for="item in indexMenu" :key="item">
                  <wux-icon type="logo-github" />
                  <view class="index-menu-label">{{item.label}}</view>
                </wux-grid>
              </wux-grids>
            </view>
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      bordered: false,
      indicatorDots: true,
      current: 1,
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      user: {
        address: "中山公园"
      },
      placeholder: "请输入你要查询的商品",
      searchValue: "黄萌鸡米饭",
      indexMenu: [
        {
          url: "",
          label: "美食",
          ImageUrl: ""
        },
        {
          url: "",
          label: "超市便利",
          ImageUrl: ""
        },
        {
          url: "",
          label: "蔬菜水果",
          ImageUrl: ""
        },
        {
          url: "",
          label: "美团专送",
          ImageUrl: ""
        },
        {
          url: "",
          label: "跑腿代购",
          ImageUrl: ""
        },
        {
          url: "",
          label: "晚餐优选",
          ImageUrl: ""
        },
        {
          url: "",
          label: "津贴联盟",
          ImageUrl: ""
        },
        {
          url: "",
          label: "甜点饮品",
          ImageUrl: ""
        },
        {
          url: "",
          label: "家常菜",
          ImageUrl: ""
        },
        {
          url: "",
          label: "减免配送费",
          ImageUrl: ""
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    toSearch() {
      wx.navigateTo({
        url: "/pages/search/main",
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log(res);
        }
      });
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
#index {
  padding: 10px;
  background-color: #fff;
}
.to-choose-address {
  margin: 3px 0 3px 10px;
}

.user-address-location {
  margin: 2px;
}
.index-menu-label {
  font-size: 10px;
}
</style>
