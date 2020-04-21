<template>
  <div id="attention">
    <div class="attention-bg" v-if="noData">
      <div class="no-data">
        <img
          src="http://img5.imgtn.bdimg.com/it/u=482517819,4006258038&fm=15&gp=0.jpg"
          alt="找不到图片啦"
        />
        <p>没有收藏的你一定是个假吃货</p>
      </div>
    </div>
    <div class="attention-bg-data" v-if="!noData">
      <p v-if="haveCanSend">当前可配送商家</p>
      <div v-if="haveCanSend" class="attention-bg-data-list">
        <store-list
            v-for="storeInfo in storeListInfo"
            :key="storeInfo.storeNum"
            :storeInfo="storeInfo"
        ></store-list>
      </div>
      <p v-if="noCanSend">当前不可配送商家</p>
      <div v-if="noCanSend" class="attention-bg-data-list">
        <store-list
            v-for="storeInfo in storeListInfo"
            :key="storeInfo.storeNum"
            :storeInfo="storeInfo"
        ></store-list>
      </div>
    </div>
  </div>
</template>
<script>
import storeList from "@/components/store-list";
export default {
  data() {
    return {
      msg: "attention",
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
        }
      ],
      haveCanSend: true,
      noCanSend: false
    };
  },
  components: {storeList},
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.noData = false;
    }
  }
};
</script>
<style scoped>
#attention {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 240, 240);
}
.attention-bg {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
}
.attention-bg > .no-data {
  width: 100%;
  display: inline-block;
  height: 160px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.attention-bg > .no-data > img {
  width: 60%;
  height: 60%;
}
.attention-bg-data > p {
  padding: 10px;
  font-size: 12px;
}
.attention-bg-data-list {
  background-color: #fff;
  padding: 0 10px;
}
</style>