// src/plugins/lazyload.js
import VueLazyload from 'vue-lazyload';

export default {
  install(app) {
    app.use(VueLazyload, {});
  }
};  