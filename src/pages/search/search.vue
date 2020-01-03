<template>
  <div id="search">
    <div class="padding">
      <div class="search-input">
        <wux-row>
          <wux-col span="10">
            <view class="placeholder">
              <wux-search-bar :placeholder="placeholder" placeholder-class="user-search" :value="value" controlled clear></wux-search-bar>
            </view>
          </wux-col>
          <wux-col span="2">
            <view class="search">
              <wux-button
                class="search-button"
                hoverClass="search-mousedown"
                type="energized"
                clear
                size="small"
                @click="searchComotidy(value)"
              >搜索</wux-button>
            </view>
          </wux-col>
        </wux-row>
      </div>
      <div class="search-hot">
        <p class="search-hot-p">热门搜索</p>
        <wux-divider :showText="showText"></wux-divider>
        <wux-button
          v-for="item in hotSearch"
          size="small"
          type="dark"
          clear
          :key="item"
          class="hot-search-button"
          @click="chooseSearch(item)"
        >{{item}}</wux-button>
      </div>
    </div>
    <div class="padding">
      <div class="search-history">
        <div class="search-history-label">
          <wux-row>
            <wux-col span="11">
              <view class="placeholder">
                <p class="search-hot-p">历史搜索</p>
              </view>
            </wux-col>
            <wux-col span="1">
              <view class="placeholder">
                <wux-icon
                  type="md-trash"
                  @click="deleteHistorySearch"
                  color="#666"
                  size="22"
                  class="delete-history"
                ></wux-icon>
              </view>
            </wux-col>
          </wux-row>
        </div>
        <wux-divider :showText="showText"></wux-divider>
        <wux-button
          v-for="item in historySearch"
          size="small"
          type="dark"
          clear
          :key="item"
          class="hot-search-button"
        >{{item}}</wux-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "search",
      showText: false,
      showCancel: true,
      value: "",
      placeholder: "黄焖鸡米饭",
      hotSearch: [
        "麻辣烫",
        "黄萌鸡米饭",
        "酸菜鱼",
        "奶茶",
        "华莱士",
        "米线",
        "沙县小吃",
        "一点点",
        "炸鸡",
        "炒饭",
        "粥"
      ],
      historySearch: ["黄焖鸡", "凉皮", "奶茶", "火锅"]
    };
  },
  methods: {
    deleteHistorySearch() {
      this.historySearch = [];
    },
    chooseSearch (search) {
        this.value = search;
        this.historySearch.push(search);
    },
    searchComotidy(value) {
        console.log(value);
    }
  }
};
</script>

<style scoped>
.padding {
  padding: 0 10px;
  background-color: #fff;
}
.search-input {
  background-color: #fff;
}
.search {
  padding: 10px;
}
.search-hot {
  height: 140px;
  background-color: #fff;
}
.search-hot-p {
  padding-top: 4px;
  font-size: 14px;
}
#search .hot-search-button {
  margin-right: 15px;
  margin-bottom: 10px;
  border: 0.5px solid rgb(216, 210, 210);
  display: inline-block;
}
.search-history {
  margin-top: 15px;
  background-color: #fff;
  min-height: 100px;
  padding-bottom: 10px;
}
.search-history-label {
  padding: 5px 0 0 0;
}
.delete-history {
  padding-top: 4px;
}
.placeholder {
  padding-top: 4px;
}
</style>