import router from './router'
import App from './App.vue'
import './filters'
import './services/confetti'

require('./bootstrap');

window.Vue = require('vue');

Vue.prototype.$Echo = Echo;
Vue.prototype.$axios = axios

const app = new Vue({
    data: () => ({
        user: window.__app__.user,
        rooms: window.__app__.rooms,
        emojis: window.__app__.emojis,
    }),
    render: h => h(App),
    router,
}).$mount('#app');
