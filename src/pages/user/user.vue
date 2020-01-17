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
          <button v-if="canIUse" open-type="getUserInfo" @click="bindGetUserInfo">登录</button>
          <p class="user-top-info-label-name">{{}}</p>
          <p class="user-top-info-label-tel">{{}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "user",
      canIUse: wx.canIUse("button.open-type.getUserInfo"),
      userInfo: {}
    };
  },
  onLoad() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
          console.log(res);
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo);
            }
          });
        }
      }
    });
  },
  watch: {
      authSetting(val) {
          console.log(val);
      }
  },
  methods: {
    bindGetUserInfo(e) {
      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.userInfo"]) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo);
              }
            });
          }
        }
      });

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
}
</style>