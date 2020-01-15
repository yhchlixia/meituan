import Vue from 'vue'
import App from './App'
import axios from "axios"
import api from "./api";

Vue.prototype.axios = axios;

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(api);

const app = new Vue(App)
app.$mount()
