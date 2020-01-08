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
          style="height:260px; margin:0 -10px;"
          circular
          autoplay
          interval="3000"
          previous-margin="10px"
          next-margin="10px"
          :current="currentCard"
          @change="changeCurrentCard"
        >
          <swiper-item
            class="index-context-swiper-two"
            v-for="(item, index_) in swipersTwo"
            :key="item.id"
            :value="index_"
          >
            <div class="index-context-swiper-big">
              <div>
                <img :src="item.imgUrl" alt />
              </div>
              <div class="storeinfo">
                <wux-row>
                  <wux-col span="2">
                    <img class="storeinfo-img img" :src="item.storeImg" alt />
                  </wux-col>
                  <wux-col span="10">
                    <div class="storeinfo-label">
                      <p for="storeName">{{item.storeName}}</p>
                      <label
                        for="discount"
                        class="storeinfo-label-discount"
                        v-for="discount in item.discounts"
                        :key="discount"
                      >{{discount}}</label>
                    </div>
                  </wux-col>
                </wux-row>
              </div>
              <div class="storeinfo-com">
                <p>{{item.slogan}}</p>
                <div class="storeinfo-com-img">
                  <wux-row gutter="5">
                    <wux-col span="4" v-for="com in item.coms" :key="com.coms_id">
                      <div class="storeinfo-com-img-col">
                        <img class="storeinfo-com-img-image image" :src="com.imgurl" alt />
                        <p>{{com.label}}</p>
                        <span class="storeinfo-com-img-newPrice color-span">￥{{com.newPrice}}</span>
                        <span
                          class="storeinfo-com-img-oldPrice color-span"
                          v-if="com.oldPrice"
                        >￥{{com.oldPrice}}</span>
                      </div>
                    </wux-col>
                  </wux-row>
                </div>
              </div>
            </div>
          </swiper-item>
        </swiper>
        <div class="menu-indicator-dots">
          <div
            v-for="item in 4"
            :key="item"
            class="menu-indicator-dots-custom"
            :class="{'yhch': item  === currentCard}"
          ></div>
        </div>
      </div>
      <div class="index-context-good">
        <div class="index-context-good-label">
          <wux-row>
            <wux-col span="10">
              <label for style="font-size:18px;margin-right:10px;">神价格</label>
              <label for style="font-size:10px;color:#777;">这么买更实惠</label>
            </wux-col>
            <wux-col class="index-context-good-label-extra" span="2">更多 ></wux-col>
          </wux-row>
        </div>
        <div class="index-context-good-scroll">
          <scroll-view scroll-x="true" style="width: 100%;height:180px;white-space: nowrap;">
            <view
              class="index-context-good-scroll-view scroll-view-width"
              v-for="item in goodScrollGod"
              :key="item.id"
            >
              <img :src="item.src" style="width:134px;height:110px;border-radius:5px;" />
              <div class="index-context-good-scroll-label">
                <p>{{item.label}}</p>
                <span class="storeinfo-com-img-newPrice color-span">￥{{item.newPrice}}</span>
                <span
                  class="storeinfo-com-img-oldPrice color-span"
                  v-if="item.oldPrice"
                >￥{{item.oldPrice}}</span>
              </div>
            </view>
            <div class="moreButton moreButton-god">
              <label>
                <wux-icon type="md-log-in" size="16"></wux-icon>
                <br />查
                <br />看
                <br />更
                <br />多
              </label>
            </div>
          </scroll-view>
        </div>
      </div>
      <div class="index-context-list">
        <div class="index-context-list-label">商家附近</div>
        <div class="index-context-list-filterbar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      opened: false,
      items: [
        {
          type: "radio",
          label: "Updated",
          value: "updated",
          checked: true,
          children: [
            {
              label: "Recently updated",
              value: "desc",
              checked: true // 默认选中
            },
            {
              label: "Least recently updated",
              value: "asc"
            }
          ],
          groups: ["001"]
        },
        {
          type: "text",
          label: "Forks",
          value: "forks",
          groups: ["002"]
        },
        {
          type: "sort",
          label: "Stars",
          value: "stars",
          groups: ["003"]
        },
        {
          type: "filter",
          label: "筛选",
          value: "filter",
          checked: true,
          children: [
            {
              type: "radio",
              label: "Languages（单选）",
              value: "language",
              children: [
                {
                  label: "JavaScript",
                  value: "javascript"
                },
                {
                  label: "HTML",
                  value: "html"
                },
                {
                  label: "CSS",
                  value: "css"
                },
                {
                  label: "TypeScript",
                  value: "typescript"
                }
              ]
            },
            {
              type: "checkbox",
              label: "Query（复选）",
              value: "query",
              children: [
                {
                  label: "Angular",
                  value: "angular"
                },
                {
                  label: "Vue",
                  value: "vue"
                },
                {
                  label: "React",
                  value: "react",
                  checked: true // 默认选中
                },
                {
                  label: "Avalon",
                  value: "avalon"
                }
              ]
            },
            {
              type: "checkbox",
              label: "配送方式",
              value: "away",
              children: [
                {
                  label: "京东配送",
                  value: "1"
                },
                {
                  label: "货到付款",
                  value: "2"
                },
                {
                  label: "仅看有货",
                  value: "3"
                },
                {
                  label: "促销",
                  value: "4"
                },
                {
                  label: "全球购",
                  value: "5"
                },
                {
                  label: "PLUS专享价",
                  value: "6"
                },
                {
                  label: "新品",
                  value: "7"
                },
                {
                  label: "配送全球",
                  value: "8"
                }
              ]
            },
            {
              type: "radio",
              label: "性别",
              value: "gander",
              children: [
                {
                  label: "男",
                  value: "0"
                },
                {
                  label: "女",
                  value: "1"
                },
                {
                  label: "通用",
                  value: "2"
                }
              ]
            },
            {
              type: "checkbox",
              label: "闭合方式",
              value: "closed_mode",
              children: [
                {
                  label: "卡扣",
                  value: "0"
                },
                {
                  label: "拉链",
                  value: "1"
                },
                {
                  label: "其他",
                  value: "2"
                }
              ]
            },
            {
              type: "checkbox",
              label: "轮子种类",
              value: "wheel_type",
              children: [
                {
                  label: "万向轮",
                  value: "0"
                },
                {
                  label: "单向轮",
                  value: "1"
                },
                {
                  label: "飞机轮",
                  value: "2"
                },
                {
                  label: "其他",
                  value: "3"
                }
              ]
            },
            {
              type: "checkbox",
              label: "箱包硬度",
              value: "wheel_type",
              children: [
                {
                  label: "硬箱",
                  value: "0"
                },
                {
                  label: "软硬结合",
                  value: "1"
                },
                {
                  label: "软箱",
                  value: "2"
                },
                {
                  label: "其他",
                  value: "3"
                }
              ]
            },
            {
              type: "checkbox",
              label: "适用场景",
              value: "wheel_type",
              children: [
                {
                  label: "旅行",
                  value: "0"
                },
                {
                  label: "婚庆",
                  value: "1"
                },
                {
                  label: "出差",
                  value: "2"
                },
                {
                  label: "其他",
                  value: "3"
                }
              ]
            }
          ],
          groups: ["001", "002", "003"]
        }
      ],
      bordered: false,
      indicatorDots: true,
      current: 0,
      currentCard: 0,
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
      goodScrollGod: [
        {
          id: 1,
          label: "花少爷凉皮",
          src: "/static/images/youpomian.jpg",
          newPrice: "11.9",
          oldPrice: "32.9",
          spread: "21"
        },
        {
          id: 2,
          label: "韩国炸鸡",
          src: "/static/images/zhaji.jpg",
          newPrice: "22.8",
          oldPrice: "32.9",
          spread: "10.1"
        },
        {
          id: 3,
          label: "正宗陕西汉中热米皮",
          src: "/static/images/mipi.jpg",
          newPrice: "11.9",
          oldPrice: "32.9",
          spread: "21"
        },
        {
          id: 4,
          label: "叫了只炸鸡（华庄店）",
          src: "/static/images/jiaolezhizhaji.jpg",
          newPrice: "17.88",
          oldPrice: "34.99",
          spread: "17.11"
        },
        {
          id: 5,
          label: "咕咕鸡脆皮鸡排&烤冷面&米皮夹饼",
          src: "/static/images/cuipiji.jpg",
          newPrice: "16.99",
          oldPrice: "36.99",
          spread: "20"
        },
        {
          id: 6,
          label: "三个先生的韩国炸鸡（无锡店）",
          src: "/static/images/threemir.jpg",
          newPrice: "25.88",
          oldPrice: "51.8",
          spread: "25.92"
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
          slogan: "用心做馅，让爱传承",
          discounts: ["9减8", "22减16", "5元优惠券", "10元优惠券"],
          coms: [
            {
              coms_id: 1,
              imgurl: "/static/images/swiperTwo-1-com-1.png",
              label: "纯手工荠菜猪肉馅饺子",
              newPrice: "13.88",
              oldPrice: "21.88"
            },
            {
              coms_id: 2,
              imgurl: "/static/images/swiperTwo-1-com-2.png",
              label: "纯手工芹菜猪肉水饺",
              newPrice: "21.88"
            },
            {
              coms_id: 3,
              imgurl: "/static/images/swiperTwo-1-com-3.png",
              label: "韭菜鸡蛋水饺（15只）",
              newPrice: "13.5",
              oldPrice: "22.23"
            }
          ]
        },
        {
          id: 2,
          url: "",
          storeName: "煲来乐煲仔饭",
          imgUrl: "/static/images/swiper-2.png",
          storeImg: "/static/images/swiperTwo-2.png",
          slogan: "最牛煲仔饭",
          discounts: ["9减8", "22减16", "5元优惠券", "10元优惠券"],
          coms: [
            {
              coms_id: 1,
              imgurl: "/static/images/swiperTwo-2-com-1.png",
              label: "【特价】青皮甘蔗脆香甜",
              newPrice: "0.99",
              oldPrice: "7.9"
            },
            {
              coms_id: 2,
              imgurl: "/static/images/swiperTwo-2-com-2.png",
              label: "【整果】超甜红颜草莓",
              newPrice: "25.9",
              oldPrice: "29.9"
            },
            {
              coms_id: 3,
              imgurl: "/static/images/swiperTwo-2-com-3.png",
              label: "【整果】超甜沙糖桔",
              newPrice: "7.9",
              oldPrice: "11.8"
            }
          ]
        },
        {
          id: 3,
          url: "",
          storeName: "叫了个炸鸡（新安店）",
          imgUrl: "/static/images/swiper-3.png",
          storeImg: "/static/images/swiperTwo-3.png",
          slogan: "美味佳肴",
          discounts: ["9减8", "22减16", "5元优惠券", "10元优惠券"],
          coms: [
            {
              coms_id: 1,
              imgurl: "/static/images/swiperTwo-3-com-1.png",
              label: "叫了个童子鸡（口水鸡）",
              newPrice: "19.8",
              oldPrice: "29.8"
            },
            {
              coms_id: 2,
              imgurl: "/static/images/swiperTwo-3-com-2.png",
              label: "叫了个童子鸡/大号",
              newPrice: "21.8",
              oldPrice: "39.8"
            },
            {
              coms_id: 3,
              imgurl: "/static/images/swiperTwo-3-com-3.png",
              label: "奥尔良烤鸡",
              newPrice: "19.8",
              oldPrice: "33.8"
            }
          ]
        },
        {
          id: 4,
          url: "",
          storeName: "果然不错鲜果旗舰店",
          imgUrl: "/static/images/swiper-4.png",
          storeImg: "/static/images/swiperTwo-4.png",
          slogan: "新鲜果切来一份",
          discounts: ["9减8", "22减16", "5元优惠券", "10元优惠券"],
          coms: [
            {
              coms_id: 1,
              imgurl: "/static/images/swiperTwo-4-com-1.png",
              label: "香菇滑鸡煲仔饭",
              newPrice: "18.8"
            },
            {
              coms_id: 2,
              imgurl: "/static/images/swiperTwo-4-com-2.png",
              label: "酱香茄子煲仔饭",
              newPrice: "17.8"
            },
            {
              coms_id: 3,
              imgurl: "/static/images/swiperTwo-4-com-3.png",
              label: "排骨腊味双拼煲仔饭",
              newPrice: "20.8",
              oldPrice: "24.8"
            }
          ]
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    onOpen() {
      this.opened = true;
    },
    changeCurrent(e) {
      this.current = e.mp.detail.current;
    },
    changeCurrentCard(e) {
      this.currentCard = e.mp.detail.current;
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
  height: calc(100% - 20px);
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
  height: 41px;
  position: relative;
  top: -50px;
  left: 10px;
}
.storeinfo-label {
  display: inline-block;
  width: 250px;
  height: 100%;
}
.storeinfo-img.img {
  width: 50px;
  height: 50px;
}
.storeinfo-label > p {
  color: #fff;
}
.storeinfo-label > label.storeinfo-label-discount {
  background-color: red;
  display: inline-block;
  color: #fff;
  height: 14px;
  font-size: 10px;
  border-radius: 3px;
  margin: 3px 10px 0 0;
  padding: 1px 3px;
}
.storeinfo-com {
  width: 100%;
  height: 120px;
  position: relative;
  top: -40px;
}
.storeinfo-com > p {
  margin: 15px 0 5px 10px;
  font-weight: bold;
}
.index-context-swiper-big {
  box-shadow: 0 3px 5px -4px;
  border-radius: 5px;
}
.storeinfo-com-img {
  height: 125px;
  width: calc(100% - 20px);
  margin: 0 10px;
  border-radius: 5px;
}
.storeinfo-com-img-image.image {
  height: 80px;
}
.storeinfo-com-img-col > p {
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.storeinfo-com-img-newPrice.color-span {
  font-size: 12px;
  margin-right: 2px;
  color: red;
}
.storeinfo-com-img-oldPrice.color-span {
  font-size: 10px;
  color: #777;
  text-decoration: line-through;
}
.moreButton.moreButton-god {
  height: 160px;
  border: none;
  padding: 35px 0;
}
.scroll-view-width {
  width: 140px;
  box-shadow: 0 4px 10px -4px;
}
.scroll-view-width > .index-context-good-scroll-label {
  padding: 0 0 0 10px;
}
.index-context-list {
  width: 100%;
  margin: 30px 0 10px 0;
}
.index-context-list-label {
  font-weight: bold;
}
</style>
