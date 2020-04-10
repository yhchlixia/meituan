<template>
  <div id="index">
    <div class="user-top">
      <div class="user-top-info">
        <wux-image
          width="60px"
          height="60px"
          wux-class="image"
          shape="circle"
          :src="userInfo.avatarUrl || 'https://picsum.photos/750/750/?random&s=2'"
          loading="Loading"
        />
        <div class="user-top-info-label">
          <button
            v-if="!userInfo.nickName"
            open-type="getUserInfo"
            @getuserinfo="bindgetuserinfo"
          >登录</button>
          <p v-if="userInfo.nickName" class="user-top-info-label-name">{{userInfo.nickName}}</p>
          <div v-if="userInfo.nickName">
            <p class="user-top-info-label-tel">17794248039</p>
            <p class="user-top-info-label-tel update-tel">
              <wux-icon type="md-create" size="12"></wux-icon>修改
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="user-label" v-if="showLabel">
      <div class="user-label-content">
        <div class="user-label-content-clear" @click="clearLabel">
          <wux-icon type="md-close" size="12"></wux-icon>
        </div>
        <div class="user-label-content-label">
          <div class="user-label-content-label-label">
            <p>开启点餐提醒，美食即刻推荐</p>
            <p>根据您的口味，按时推荐健康美食</p>
          </div>
          <div class="user-label-button">
            <button>去开启</button>
          </div>
        </div>
      </div>
    </div>
    <div class="user-list">
      <wux-cell-group>
        <wux-cell v-for="item in items" :key="item.id" :thumb="item.thumb" is-link :extra="item.extra" :url="item.url">
          {{item.title}}<span v-if="item.text" class="user-list-text">{{item.text || ''}}</span><span :class="{'user-liat-number-text' : item.text}" class="user-list-number">{{item.number || ''}}</span><span class="user-list-company">{{item.company || ''}}</span>
        </wux-cell>
      </wux-cell-group>
    </div>
    <div class="user-footer">
      <button class="user-footer-button">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "user",
      userInfo: {},
      showLabel: true,
      items: [{
        id: 1,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        number: 4,
        company: '张',
        title: '美团红包'
      },{
        id: 2,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        number: 3,
        company: '张',
        title: '商家代金券'
      },{
        id: 3,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        text: '津贴余额',
        number: '20',
        company: '元',
        title: '津贴'
      },{
        id: 4,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '我的地址',
        url: '/pages/user-list/address/main'
      },{
        id: 5,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '我的关注'
      },{
        id: 6,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '我的评价'
      },{
        id: 7,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '邀请有奖'
      },{
        id: 8,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '客服中心'
      },{
        id: 9,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '帮助和反馈'
      },{
        id: 10,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '协议和说明'
      },{
        id: 11,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        extra: '177****8039',
        title: '修改手机号'
      },{
        id: 12,
        thumb: 'http://cdn.skyvow.cn/logo.png',
        title: '餐饮加盟'
      }]
    };
  },
  onLoad() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              that.userInfo = res.userInfo;
            }
          });
        }
      }
    });
  },
  methods: {
    bindgetuserinfo(e) {
      this.userInfo = e.mp.detail.userInfo;
    },
    clearLabel() {
      this.showLabel = false;
    }
  }
};
</script>

<style scoped>
.user-top {
  background-color: #ffc125;
  height: 80px;
  width: calc(100% - 20px);
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.user-top-info {
  display: flex;
}
.user-top-info-label {
  display: inline-block;
  width: calc(100% - 70px);
  margin-left: 10px;
}
.user-top-info-label > button {
  width: 100px;
  height: 40px;
  display: inline-block;
  font-size: 18px;
  line-height: 40px;
  margin-top: 10px;
  background-color: #ffc125;
  border: none;
  border-radius: 0;
  font-weight: bold;
}
.user-top-info-label > button:after {
  border: none;
}
.user-top-info-label-name {
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 5px;
}
.user-top-info-label-tel {
  display: inline-block;
  margin-left: 20px;
}
.update-tel {
  font-size: 12px;
  height: 20px;
  background-color: #eee;
  border-radius: 20px;
  margin-left: 10px;
  padding: 0 15px;
  line-height: 20px;
}
.user-label {
  width: 100%;
  padding: 10px;
}
.user-label-content {
  width: calc(100% - 40px);
  background-color: #fff;
  position: relative;
  padding: 20px 10px;
}
.user-label-content-clear {
  position: absolute;
  right: 5px;
  top: -5px;
}
.user-label-content-label {
  display: flex;
}
.user-label-content-label-label {
  flex: 1;
}
.user-label-content-label-label > p:first-child {
  font-size: 14px;
}
.user-label-content-label-label > p:nth-child(2) {
  font-size: 12px;
  margin-top: 3px;
}
.user-label-button {
  padding: 0 20px;
  height: 38px;
}
.user-label-button > button {
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #aaa;
  line-height: 25px;
  margin-top: 7.5px;
  border-radius: 0;
}
.user-label-button > button:after {
  border-radius: 0;
}
.user-footer > button.user-footer-button {
  width: 100%;
  text-align: center;
  margin: 10px 0 50px 0;
  background-color: #fff;
  border: none;
  border-radius: 0;
}
.user-footer > button.user-footer-button::after {
  border-radius: 0;
  border: none;
}
.user-list-number {
  color: red;
  font-size: 20px;
  margin: 0 10px;
}
.user-list-text {
  font-size: 14px;
  margin-left: 10px;
}
.user-liat-number-text.user-list-number {
  font-size: 18px;
}
.user-list-company {
  font-size: 14px;
}
</style>