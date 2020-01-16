import * as meituanIndex from "./meituan-index";
import * as order from "./order";

const apiObj = {
  meituanIndex,
  order
};

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiObj;
      }
    }
  });
};
export default {
  install
};
