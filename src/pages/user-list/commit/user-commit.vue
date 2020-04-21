<template>
    <div id="user-commit">
        <p>已贡献{{commits.length}}条评价</p>
        <div class="commit-list">
            <div class="commit-li" v-for="commit in commits" :key="commit.id">
                <div class="commit-li-left">
                    <img :src="commit.storeImg" alt="找不到了">
                </div>
                <div class="commit-li-right">
                    <p><span class="commit-storeName">{{commit.storeName}}></span> <span class="commit-date">{{commit.date}}</span></p>
                    <div class="commit-type">
                        <div class="commit-store">
                            <span>商家：</span>
                            <wux-rater slot="footer" :defaultValue="commit.storeS" font-size="15" margin="0" disabled />
                            <span class="margin">口味{{commit.commitStore.tasteNum}}星</span>
                            <span class="margin">包装{{commit.commitStore.packageNum}}星</span>
                        </div>
                        <div class="commit-store">
                            <span>骑手：</span>
                            <wux-icon type="md-sad" size="15" color="orange"></wux-icon>
                            <span class="margin">{{commit.commitPerson.commit}}</span>
                            <span class="margin reson">{{commit.commitPerson.reson}}</span>
                        </div>
                    </div>
                    <div class="commit-list-footer">
                        <div class="add-commit" @click="toAddCommit(commit.canAddcommit)" :class="{'noAddCommit': commit.canAddcommit === false}">
                            <wux-icon type="md-brush" size="18" :color="commit.canAddcommit ? '#666' : '#999'" ></wux-icon>
                            <span>追评</span>
                        </div>
                        <div class="delete-commit" @click="deleteCommit(commit)">
                            <wux-icon type="md-trash" size="18" color="#666"></wux-icon>
                            <span>删除</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="commit-footer">没有数据了</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: "userCommmit",
            commits: [
                {
                    id: 1,
                    storeImg: "/static/images/youpomian.jpg",
                    storeName: "花少爷凉皮",
                    date: "2020.4.20",
                    storeS: 4,
                    canAddcommit: true,
                    commitStore: {
                        tasteNum: 4,
                        packageNum: 4
                    },
                    commitPerson: {
                        commit: "不满意",
                        reson: "送达超时"
                    }
                },
                {
                    id: 2,
                    storeImg: "/static/images/youpomian.jpg",
                    storeName: "火锅鸡米饭",
                    date: "2019.12.30",
                    storeS: 4,
                    canAddcommit: false,
                    commitStore: {
                        tasteNum: 4,
                        packageNum: 4
                    },
                    commitPerson: {
                        commit: "不满意",
                        reson: "送达超时"
                    }
                },
                {
                    id: 3,
                    storeImg: "/static/images/youpomian.jpg",
                    storeName: "徽小厨娘",
                    date: "2019.12.30",
                    storeS: 4,
                    canAddcommit: false,
                    commitStore: {
                        tasteNum: 4,
                        packageNum: 4
                    },
                    commitPerson: {
                        commit: "不满意",
                        reson: "送达超时"
                    }
                },
                {
                    id: 4,
                    storeImg: "/static/images/youpomian.jpg",
                    storeName: "花少爷凉皮",
                    date: "2019.12.30",
                    storeS: 4,
                    canAddcommit: false,
                    commitStore: {
                        tasteNum: 4,
                        packageNum: 4
                    },
                    commitPerson: {
                        commit: "不满意",
                        reson: "送达超时"
                    }
                }]
        }
    },
    methods: {
        toAddCommit(item) {
            if (item) {
                console.log(1);
            } else {
                wx.showToast({
                    title: "超出评价时间7天就无法追评了奥",
                    icon: "none",
                    duration: 2000
                });
            }
        },
        deleteCommit(commit) {
            const that = this;
            wx.showModal({
                content: "确定要删除这条评价吗？",
                success(res) {
                    console.log(res);
                    if(res.confirm) {
                        console.log(1);
                    } else if (res.cancel) {
                        console.log(2);
                    }
                }
            })
        }
    }
}
</script>
<style scoped>
#user-commit {
    width: 100%;
    height: 100%;
    background-color: rgb(241, 237, 237);
    padding: 0 10px;
}
#user-commit > p {
    padding: 10px 0;
}
.commit-footer {
    text-align: center;
    font-size: 12px;
}
.commit-list {
    width: calc(100% - 20px);
}
.commit-li {
    padding: 10px;
    background-color: #fff;
    height: 120px;
    width: calc(100% - 20px);
    margin-bottom: 10px;
    border-radius: 3px;
    display: flex;
}
.commit-li-left {
    width: 60px;
    height: 100%;
}
.commit-li-left > img {
    width: 50px;
    height: 50px;
}
.commit-li-right {
    flex: 1;
}
.commit-li-right > p {
    width: 100%;
}
.commit-storeName {
    font-size: 18px;
}
.commit-date {
    font-size: 12px;
    color: #999;
    float: right;
    line-height: 24px;
}
.commit-type {
    width: 100%;
    padding: 5px 0 10px 0;
    border-bottom: 1px solid #999;
}
.commit-store {
    font-size: 12px;
    color: #999;
}
.margin {
    margin-left: 10px;
}
.margin.reson {
    background-color: #eee;
    padding: 0 2px;
}
.commit-list-footer {
    display: inline-block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: right;
}
.commit-list-footer > div {
    display: inline-block;
    margin-left: 15px;
}
.add-commit.noAddCommit {
    color: #999;
}
.delete-commit > span {
    margin-left: 5px;
}
</style>