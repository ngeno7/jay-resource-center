import Vue from 'vue';
import Vuex from 'vuex';

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import Sponsors  from './Sponsors';
import Subscribers from './Subscribers';
import Resources from './Resources';
import Admins from './Admins';
import Representatives from './Representatives';
import Brands from './Brands';
import Industries from './Industries';
import Categories from './Categories';
import Products from './Products';
Vue.use(Vuex)


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules : {
      sponsors : Sponsors,
      subscribers : Subscribers,
      resources : Resources,
      admins : Admins,
      representatives : Representatives,
      brands : Brands,
      industries : Industries,
      categories : Categories,
      products : Products,
    }
    // strict: process.env.NODE_ENV !== 'production',
})
