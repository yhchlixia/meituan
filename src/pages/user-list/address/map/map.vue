<template>
    <div id="map">
        <div class="map-search">
            <div class="map-search-name">
                <span style="font-size: 12px; margin-right: 5px;">{{addressName}}</span>
                <wux-icon type="md-arrow-dropdown" size="12px" color="#ccc"></wux-icon>
            </div>
            <div class="map-search-input">
                <wux-icon type="md-search" size="12px" color="#999"></wux-icon>
                <input type="text" @focus="cancle(false)" placeholder="请输入您的地址" placeholder-style="color: #999;font-size: 12px;" v-model="searchAddress">
            </div>
            <div class="map-search-canle" @click="cancle(true)" v-if="isCancle">
                <span>取消</span>
            </div>
        </div>
        <map class="map-size" name="address" :longitude="currentAddress.longitude" :latitude="currentAddress.latitude" :markers="markers"></map>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 1,
            currentAddress: {},
            markers: [],
            addressName: '无锡',
            searchAddress: "",
            isCancle: false,
            lock: false
        }
    },
    onLoad() {
        const that = this;
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                that.currentAddress = res;
                const marker = {
                    id: 0,
                    longitude: res.longitude,
                    latitude: res.latitude,
                    iconPath: '/static/images/location.png',
                    width: 50,
                    height: 50,
                    anchor: {x: .5,y: 1}
                }
                that.markers = [marker];
            }
        });
    },
    methods: {
        cancle(cancle) {
            this.isCancle = !cancle;
        }
    }
}
</script>
<style scoped>
#map {
    height: 100%;
    width: 100%;
}
.map-lock {
    background-color: #eee;
}
.map-search {
    background-color: #fff;
    width: calc(100% - 20px);
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 0 10px;
    display: flex;
}
.map-search-name {
    width: 44px;
    display: inline-block;
    line-height: 50px;
}
.map-search-input {
    flex: 1;
    position: relative;
    padding: 10px 0;
}
.map-search-input ._wux-icon {
    position: absolute;
    left: 10px;
    line-height: 30px;

}
.map-search-input input {
    background-color: #eee;
    height: 30px;
    border-radius: 15px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 12px;
}
.map-size {
    width: 100%;
    height: 350px;
}
.map-search-canle {
    width: 40px;
    font-size: 12px;
    display: inline-block;
    line-height: 50px;
    color: #999;
    text-align: right;
}
</style>