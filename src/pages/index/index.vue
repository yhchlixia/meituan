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
    <div class="index-search sticky" catchtouchmove="noop">
      <wux-search-bar
        @click="toSearch"
        clear
        :placeholder="placeholder"
        placeholder-class="user-search"
        :showCancel="showCancel"
        disabled
      ></wux-search-bar>
    </div>
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
    </div>
    <div class="filterbar">
      <wux-backdrop id="wux-backdrop" z-index="12" @click="toReleaseModel" />
      <div class="index-context-list">
        <div class="index-context-list-label">商家附近</div>
        <div class="index-context-list-filterbar">
          <div class="index-context-list-filterbar-menu sticky" catchtouchmove="noop">
            <div>
              <wux-row>
                <wux-col span="3" @click="toChooseList('sort')">
                  <div>
                    <span @click="retain">{{SortFlag}}</span>
                    <wux-icon type="md-arrow-dropdown" size="16px"></wux-icon>
                  </div>
                </wux-col>
                <wux-col span="2" @click="toChooseList('saleHot')">
                  <div>
                    <span>销量高</span>
                  </div>
                </wux-col>
                <wux-col span="2" @click="toChooseList('speed')">
                  <div>
                    <span>速度快</span>
                  </div>
                </wux-col>
                <wux-col span="2" @click="toChooseList('alliance')">
                  <div>
                    <span>津贴联盟</span>
                  </div>
                </wux-col>
                <wux-col span="3" @click="toChooseList('choose')">
                  <div style="text-align:right">
                    <span>筛选</span>
                    <wux-icon type="md-wine" size="14px" v-if="!filterNum || choose"></wux-icon>
                    <div class="button-number" v-if="filterNum && !choose">{{filterNum}}</div>
                  </div>
                </wux-col>
              </wux-row>
            </div>
            <div class="sort-list" v-if="sortList">
              <ul>
                <li
                  class="sort-list-li"
                  v-for="Sort in sortListArray"
                  :key="Sort.id"
                  @click="toChooseSort(Sort)"
                  :class="{'orange' : SortFlag === Sort.label}"
                >{{Sort.label}}</li>
              </ul>
            </div>
            <div class="filter-sum" v-if="choose">
              <div class="filter-sum-list">
                <div class="filter-sum-overflow">
                  <scroll-view
                    scroll-y="true"
                    style="height:100%;width: calc(100% - 20px);white-space: nowrap;"
                  >
                    <view class="div">
                      <p>商家特色（可多选）</p>
                      <wux-row gutter="10">
                        <wux-col
                          span="4"
                          v-for="item in optionsMerchant"
                          :key="item.id"
                          @click="item.checked = !item.checked"
                        >
                          <div class="filter-label" :class="{'option': item.checked}">{{item.label}}</div>
                        </wux-col>
                      </wux-row>
                    </view>
                    <view class="div">
                      <p>人均价</p>
                      <wux-row gutter="10">
                        <wux-col
                          span="4"
                          @click="chooseAmount(item.id)"
                          v-for="item in optionsAmount"
                          :key="item.id"
                        >
                          <div
                            class="filter-label"
                            :class="{'option': item.id === optionAmount}"
                          >{{item.label}}</div>
                        </wux-col>
                      </wux-row>
                    </view>
                    <view class="div">
                      <p>优惠活动（可多选）</p>
                      <wux-row gutter="10">
                        <wux-col
                          span="4"
                          v-for="item in optionsDiscount"
                          :key="item.id"
                          @click="item.checked = !item.checked"
                        >
                          <div class="filter-label" :class="{'option': item.checked}">{{item.label}}</div>
                        </wux-col>
                      </wux-row>
                    </view>
                  </scroll-view>
                </div>
              </div>
              <div class="filter-sum-bottom">
                <button @click="toClear">清空</button>
                <button @click="toSearchFilter">
                  完成
                  <div class="button-number" v-if="filterNum">{{filterNum}}</div>
                </button>
              </div>
            </div>
          </div>
          <div style="min-height:540px">
            <store-list
              v-for="storeInfo in storeListInfo"
              :key="storeInfo.storeNum"
              :storeInfo="storeInfo"
            ></store-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import storeList from "@/components/store-list";
import { $wuxBackdrop } from "../../../static/lib/index";

export default {
  data() {
    return {
      optionsMerchant: [
        {
          id: 1,
          label: "津贴联盟",
          checked: false
        },
        {
          id: 2,
          label: "美团专送",
          imgUrl: "/static/user.png",
          checked: false
        },
        {
          id: 3,
          label: "到店自取",
          imgUrl: "/static/user.png",
          checked: false
        },
        {
          id: 4,
          label: "赠准时宝",
          imgUrl: "/static/user.png",
          checked: false
        },
        {
          id: 5,
          label: "放心吃",
          imgUrl: "/static/user.png",
          checked: false
        },
        {
          id: 6,
          label: "点评高分",
          checked: false
        },
        {
          id: 7,
          label: "品牌商家",
          checked: false
        },
        {
          id: 8,
          label: "免配送费",
          checked: false
        },
        {
          id: 9,
          label: "新商家",
          checked: false
        },
        {
          id: 10,
          label: "0元起送",
          checked: false
        },
        {
          id: 11,
          label: "跨天预定",
          checked: false
        }
      ],
      optionsAmount: [
        {
          id: 1,
          label: "20元以下"
        },
        {
          id: 2,
          label: "20-40元"
        },
        {
          id: 3,
          label: "40元以上"
        }
      ],
      optionAmount: 0,
      optionsDiscount: [
        {
          id: 1,
          label: "满减优惠",
          checked: false
        },
        {
          id: 2,
          label: "进店领券",
          checked: false
        },
        {
          id: 3,
          label: "折扣商品",
          checked: false
        },
        {
          id: 4,
          label: "门店新客立减",
          checked: false
        },
        {
          id: 5,
          label: "新人立减",
          checked: false
        },
        {
          id: 6,
          label: "满赠活动",
          checked: false
        },
        {
          id: 7,
          label: "蛮烦代金券",
          checked: false
        },
        {
          id: 8,
          label: "减配送费",
          checked: false
        },
        {
          id: 9,
          label: "买赠活动",
          checked: false
        },
        {
          id: 10,
          label: "提前下单优惠",
          checked: false
        }
      ],
      storeListInfo: [
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        },
        {
          imgUrl: "/static/images/youpomian.jpg",
          storeName: "花少爷凉皮",
          storeNum: "SS101101",
          starNum: 4.6,
          monthNum: 1500,
          deliveryTime: "35",
          distance: "4.3km",
          amount: {
            initAmount: 20,
            deliveryFee: 4,
            perCapitaAmount: 16
          },
          pick: true,
          storeType: "中式简餐",
          discounts: [
            {
              id: 1,
              label: "30减19"
            },
            {
              id: 2,
              label: "40减20"
            },
            {
              id: 3,
              label: "60减30"
            },
            {
              id: 4,
              label: "1元",
              allowance: true
            },
            {
              id: 5,
              label: "20减19"
            },
            {
              id: 6,
              label: "20减19"
            },
            {
              id: 7,
              label: "支持自取",
              sale: true
            }
          ]
        }
      ],
      SortFlag: "综合排序",
      sortListArray: [
        {
          id: 1,
          label: "综合排序"
        },
        {
          id: 2,
          label: "距离最近"
        },
        {
          id: 3,
          label: "评分最高"
        },
        {
          id: 4,
          label: "起送价最低"
        },
        {
          id: 5,
          label: "配送费最低"
        },
        {
          id: 6,
          label: "人均高到低"
        },
        {
          id: 7,
          label: "人均低到高"
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
      ],
      sortList: false,
      choose: false,
      condition: {}
    };
  },

  components: {
    card,
    storeList
  },
  onLoad() {
    this.$wuxBackdrop = $wuxBackdrop();
    this.loadData();
  },
  computed: {
    filterNum() {
      var num = 0;
      this.optionsMerchant.forEach(ele => {
        if (ele.checked === true) {
          num++;
        }
      });
      this.optionsDiscount.forEach(ele => {
        if (ele.checked === true) {
          num++;
        }
      });
      if (this.optionAmount !== 0) {
        num++;
      }
      return num;
    }
  },
  noop() {},
  methods: {
    loadData() {
      this.$api.meituanIndex.toIndex().then(res => {
        console.log(res);
      });
    },
    chooseAmount(optionAmount) {
      this.optionAmount = optionAmount;
    },
    toSearchFilter() {
      this.condition.Merchant = [];
      this.condition.Discount = [];
      this.optionsMerchant.forEach(element => {
        if (element.checked === true) {
          this.condition.Merchant.push(element);
        }
      });
      this.condition.Amount = this.optionAmount;
      this.optionsDiscount.forEach(element => {
        if (element.checked === true) {
          this.condition.Discount.push(element);
        }
      });
      console.log(this.condition);
      this.toReleaseModel();
    },
    toClear() {
      this.optionsMerchant.forEach(element => {
        if (element.checked) {
          element.checked = false;
        }
      });
      this.optionsDiscount.forEach(element => {
        if (element.checked) {
          element.checked = false;
        }
      });
      this.optionAmount = 0;
    },
    toChooseSort(item) {
      this.SortFlag = item.label;
      this.toReleaseModel();
    },
    toReleaseModel() {
      this.$wuxBackdrop.release();
      this.choose = false;
      this.sortList = false;
    },
    toChooseList(item) {
      wx.pageScrollTo({
        scrollTop: 995,
        duration: 10
      });
      console.log(item);
      this.$wuxBackdrop.release();
      if (item === "sort") {
        this.sortList
          ? this.$wuxBackdrop.release()
          : this.$wuxBackdrop.retain();
        this.choose = false;
        this.sortList = !this.sortList;
      } else if (item === "choose") {
        this.choose ? this.$wuxBackdrop.release() : this.$wuxBackdrop.retain();
        this.sortList = false;
        this.choose = !this.choose;
      } else {
        this.sortList = false;
        this.choose = false;
      }
    },
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
      this.toReleaseModel();
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
.sticky {
  position: sticky;
  z-index: 888;
  background-color: #fff;
  margin: 0 -10px;
  padding: 0 10px;
}
.index-search {
  top: 0;
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
  margin-bottom: 15px;
}
.index-context-list-filterbar-menu {
  top: 47px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding: 5px 10px;
}
.sort-list {
  position: relative;
  top: 5px;
  margin: 0 -10px;
  overflow: hidden;
}
.filter-sum {
  z-index: 999;
  height: 450px;
  width: calc(100% + 20px);
  background-color: #fff;
  position: fixed;
  top: 85px;
  left: 0px;
  overflow: scroll;
}
.filter-sum-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px #eee solid;
}
.filter-sum-bottom > button {
  height: 100%;
  width: 50%;
  line-height: 50px;
  font-size: 16px;
  border: none;
  display: inline-block;
  border-radius: 0px;
}
.filter-sum-bottom > button:after {
  border: none;
}
.filter-sum-bottom > button:nth-child(2) {
  background-color: rgb(235, 193, 10);
}
.filter-sum-list {
  height: 400px;
  width: 100%;
}
.filter-sum-overflow {
  height: 100%;
  overflow-y: scroll;
  background-color: #fff;
  z-index: 1200;
}
.div {
  margin: 10px;
  width: calc(100% - 20px);
}
.div > p {
  font-size: 14px;
}
.sort-list-li {
  background-color: #fff;
  font-size: 14px;
  color: #000;
  line-height: 30px;
  border-bottom: 0.5px solid #ccc;
  padding: 10px;
}
.orange {
  color: orange;
}
.filter-label {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 245, 245);
  text-align: center;
  font-size: 12px;
  margin: 5px 0;
}
.option {
  color: rgb(245, 116, 11);
  background-color: rgb(248, 234, 204);
}
.button-number {
  height: 14px;
  min-width: 14px;
  border-radius: 50%;
  background-color: #000;
  display: inline-block;
  color: #fff;
  font-size: 10px;
  line-height: 14px;
  margin-left: 5px;
  text-align: center;
}
</style>
