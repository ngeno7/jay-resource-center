

window.Vue = require('vue');
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)

// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// Vuesax Admin Filters
import './filters/filters'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
// PrismJS
import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'



router.beforeEach((to,from,next)=>{
	if(document.querySelector('#page-loader') != null){
		Vue.prototype.$vs.loading({
            container : '#page-loader',
            color : 'dark',
            scale : 0.7,
        });
	}
	next();
})
router.afterEach((to,from)=>{
		setTimeout(function(){
			Vue.prototype.$vs.loading.close('#page-loader > .con-vs-loading');
		},500)
})


window.axios = require('axios');
window.axios = axios.create({
 // baseURL: 'http://localhost/rc-directory/',
   baseURL: 'https://resources.miningmarketplace.com/',
  /* other custom settings */
  crossDomain: true,
});

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

window.axios.interceptors.request.use(request => {
    Vue.prototype.$vs.loading({
    	text : 'Loading...'
    } );
  return request;
})
window.axios.interceptors.response.use(response => {
  setTimeout(function(){
    Vue.prototype.$vs.loading.close();
  },1000);
  return response
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
