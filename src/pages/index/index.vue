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
      <swiper :current="current" @change="changeCurrent">
        <block>
          <swiper-item>
            <view class="swiper-item">
              <wux-grids :bordered="bordered" col="5" square>
                <wux-grid v-for="item in indexMenuOne" :key="item">
                  <img class="index-menu-img" :src="item.ImageUrl" alt />
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
                <wux-grid v-for="item in indexMenuTwo" :key="item">
                  <img class="index-menu-img" :src="item.ImageUrl" alt />
                  <view class="index-menu-label">{{item.label}}</view>
                </wux-grid>
              </wux-grids>
            </view>
          </swiper-item>
        </block>
      </swiper>
      <div class="menu-indicator-dots">
        <div
          v-for="item in 2"
          :key="item"
          class="menu-indicator-dots-custom"
          :class="{'yhch': item  === current}"
        ></div>
      </div>
    </div>
    <div class="index-context">
      <div class="index-context-good">
        <div class="index-context-good-label">
          <wux-row>
            <wux-col span="10">
              <label for>为你优选</label>
            </wux-col>
            <wux-col class="index-context-good-label-extra" span="2">更多 ></wux-col>
          </wux-row>
        </div>
        <div class="index-context-good-scroll">
          <scroll-view scroll-x="true" style="width: 100%;height:130px;white-space: nowrap;">
            <view class="index-context-good-scroll-view" v-for="item in goodScroll" :key="item.id">
              <img :src="item.src" style="width:120px;height:80px;border-radius:5px;" />
              <div class="index-context-good-scroll-label">
                <p class>{{item.label}}</p>
                <span>{{item.text}}</span>
              </div>
            </view>
            <div class="moreButton">
              <label>
                查
                <br />看
                <br />更
                <br />多
              </label>
            </div>
          </scroll-view>
        </div>
      </div>
      <div class="index-context-swiper">
        <swiper
          style="height:70px;"
          indicator-dots="true"
          autoplay
          circular
          interval="4000"
          indicator-color="#aaa"
          indicator-active-color="orange"
        >
          <swiper-item v-for="item in swipers" :key="item.id">
            <img :src="item.imgUrl" alt />
          </swiper-item>
        </swiper>
      </div>
      <div class="index-context-swiper">
        <swiper
          style="height:200px; margin:0 -10px;"
          autoplay
          circular
          interval="3000"
          previous-margin="10px"
          next-margin="10px"
        >
          <swiper-item class="index-context-swiper-two" v-for="(item, index_) in swipersTwo" :key="item.id" :value="index_">
            <div>
              <img :src="item.imgUrl" alt />
            </div>
            <div class="storeinfo">
              <img :src="item.storeImg" alt />
              <label for="storeName">{{item.storeName}}</label>
              <label for="discount" class="storeinfo-label-discount" v-for="discount in item.discounts" :key="discount">{{discount}}</label>
            </div>
          </swiper-item>
        </swiper>
      </div>
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
      current: 0,
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
      indexMenuOne: [
        {
          url: "",
          label: "美食",
          ImageUrl: "/static/images/menu-11.png"
        },
        {
          url: "",
          label: "超市便利",
          ImageUrl: "/static/images/menu-12.png"
        },
        {
          url: "",
          label: "蔬菜水果",
          ImageUrl: "/static/images/menu-13.png"
        },
        {
          url: "",
          label: "美团专送",
          ImageUrl: "/static/images/menu-14.png"
        },
        {
          url: "",
          label: "跑腿代购",
          ImageUrl: "/static/images/menu-15.png"
        },
        {
          url: "",
          label: "晚餐优选",
          ImageUrl: "/static/images/menu-16.png"
        },
        {
          url: "",
          label: "津贴联盟",
          ImageUrl: "/static/images/menu-17.png"
        },
        {
          url: "",
          label: "甜点饮品",
          ImageUrl: "/static/images/menu-18.png"
        },
        {
          url: "",
          label: "饺子馆",
          ImageUrl: "/static/images/menu-19.png"
        },
        {
          url: "",
          label: "减免配送费",
          ImageUrl: "/static/images/menu-20.png"
        }
      ],
      indexMenuTwo: [
        {
          url: "",
          label: "小吃馆",
          ImageUrl: "/static/images/menu-1.png"
        },
        {
          url: "",
          label: "快食简餐",
          ImageUrl: "/static/images/menu-2.png"
        },
        {
          url: "",
          label: "汉堡披萨",
          ImageUrl: "/static/images/menu-3.png"
        },
        {
          url: "",
          label: "麻辣烫冒菜",
          ImageUrl: "/static/images/menu-4.png"
        },
        {
          url: "",
          label: "浪漫鲜花",
          ImageUrl: "/static/images/menu-5.png"
        },
        {
          url: "",
          label: "无辣不欢",
          ImageUrl: "/static/images/menu-6.png"
        },
        {
          url: "",
          label: "品牌连锁",
          ImageUrl: "/static/images/menu-7.png"
        },
        {
          url: "",
          label: "凉皮肉夹馍",
          ImageUrl: "/static/images/menu-8.png"
        },
        {
          url: "",
          label: "甜蜜蛋糕",
          ImageUrl: "/static/images/menu-9.png"
        },
        {
          url: "",
          label: "全部分类",
          ImageUrl: "/static/images/menu-10.png"
        }
      ],
      goodScroll: [
        {
          id: 1,
          label: "花少爷凉皮",
          text: "根据你吃过的店推荐",
          src: "/static/images/youpomian.jpg"
        },
        {
          id: 2,
          label: "韩国炸鸡",
          text: "根据你吃过的店推荐",
          src: "/static/images/zhaji.jpg"
        },
        {
          id: 3,
          label: "正宗陕西汉中热米皮",
          text: "根据你吃过的店推荐",
          src: "/static/images/mipi.jpg"
        },
        {
          id: 4,
          label: "叫了只炸鸡（华庄店）",
          text: "根据你吃过的店推荐",
          src: "/static/images/jiaolezhizhaji.jpg"
        },
        {
          id: 5,
          label: "咕咕鸡脆皮鸡排&烤冷面&米皮夹饼",
          text: "根据你吃过的店推荐",
          src: "/static/images/cuipiji.jpg"
        },
        {
          id: 6,
          label: "三个先生的韩国炸鸡（无锡店）",
          text: "根据你吃过的店推荐",
          src: "/static/images/threemir.jpg"
        }
      ],
      swipers: [
        {
          id: 1,
          url: "",
          imgUrl: "/static/images/swiper-1.png"
        },
        {
          id: 2,
          url: "",
          imgUrl: "/static/images/swiper-2.png"
        },
        {
          id: 3,
          url: "",
          imgUrl: "/static/images/swiper-3.png"
        },
        {
          id: 4,
          url: "",
          imgUrl: "/static/images/swiper-4.png"
        }
      ],
      swipersTwo: [
        {
          id: 1,
          url: "",
          storeName: "大嘴怪手工水饺（凉皮）",
          imgUrl: "/static/images/swiper-1.png",
          storeImg: "/static/images/swiperTwo-1.png",
          discounts: ["9减8","22减16","5元优惠券","10元优惠券"]
        },
        {
          id: 2,
          url: "",
          storeName: "煲来乐煲仔饭",
          imgUrl: "/static/images/swiper-2.png",
          storeImg: "/static/images/swiperTwo-2.png",
          discounts: ["9减8","22减16","5元优惠券","10元优惠券"]
        },
        {
          id: 3,
          url: "",
          storeName: "叫了个炸鸡（新安店）",
          imgUrl: "/static/images/swiper-3.png",
          storeImg: "/static/images/swiperTwo-3.png",
          discounts: ["9减8","22减16","5元优惠券","10元优惠券"]
        },
        {
          id: 4,
          url: "",
          storeName: "果然不错鲜果旗舰店",
          imgUrl: "/static/images/swiper-4.png",
          storeImg: "/static/images/swiperTwo-4.png",
          discounts: ["9减8","22减16","5元优惠券","10元优惠券"]
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    changeCurrent(e) {
      this.current = e.mp.detail.current;
    },
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
  font-size: 12px;
  width: 60px;
}
.index-menu-img {
  width: 45px;
  height: 45px;
}
.menu-indicator-dots {
  width: 100%;
  height: 0px;
  text-align: center;
  position: relative;
  top: -20px;
}
.index-context-good {
  margin-top: 10px;
}
.index-context-good-label {
  font-size: 18px;
}
.index-context-good-label-extra {
  font-size: 12px;
  text-align: right;
  line-height: 24px;
}
.index-context-good-scroll-view {
  height: 130px;
  width: 120px;
  display: inline-block;
  margin: 10px 10px 10px 0;
  border-radius: 5px;
}
.index-context-good-scroll-button {
  height: 80px;
  width: 20px;
  border-radius: 3px;
  border: 1px solid #ccc;
  display: inline-block;
  word-wrap: break-word;
  letter-spacing: 20px;
}
.index-context-good-scroll-label {
  width: 120px;
  height: 40px;
}
.index-context-good-scroll-label > p {
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.index-context-good-scroll-label > span {
  font-size: 10px;
  color: #777;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.moreButton {
  font-size: 12px;
  width: 20px;
  height: 80px;
  display: inline-block;
  position: absolute;
  top: 10px;
  border: 1px solid #aaa;
  border-radius: 3px;
}
.moreButton > label {
  /* width: 20px;
    height: 80px; */
  display: inline-block;
  padding: 3px 4px;
}
.index-context-swiper {
  margin-top: 20px;
}
.index-context-swiper img {
  width: 100%;
  height: 70px;
}
.menu-indicator-dots-custom {
  display: inline-block;
  margin-right: 5px;
  height: 2px;
  width: 2px;
  border-radius: 1px;
  background-color: #aaa;
}
.yhch {
  width: 5px;
  background-color: orange;
}
.index-context-swiper-two {
  width: calc(100% - 10px) !important;
  padding: 0 5px;
}
.storeinfo {
  position: relative;
  top: -35px;
  left: 10px;
}
.storeinfo>img {
  width: 41px;
  height: 41px;
}
.storeinfo>label {
  color: #fff;
}
.storeinfo>label.storeinfo-label-discount {
  background-color: red;
  display: inline-block;
  height: 15px;
}
</style>
