/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const actions = {

    // ////////////////////////////////////////////
    // SIDEBAR & UI UX
    // ////////////////////////////////////////////

    updateSidebarWidth({ commit }, width) {
      commit('UPDATE_SIDEBAR_WIDTH', width);
    },
    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY');
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val);
    },
    updateWindowWidth({ commit }, width) {
      commit('UPDATE_WINDOW_WIDTH', width);
    },


    // ////////////////////////////////////////////
    // COMPONENT
    // ////////////////////////////////////////////

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    //  The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },
    async fetchRegions({commit}){
      let fetching = await axios.get('admin/ajax/fetch-regions');
      let fetchedRegions = fetching.data.regions;
      commit('setRegions',fetchedRegions);
    },
    async createNewAccount({commit},params){
       let sendingForm = await axios.post(params.url,params.fd);
       let sentForm = sendingForm;
       if(sentForm.data.status == true){
        params.notify({
          position : 'right-top',
          color : 'success',
          text : sentForm.data.msg,
          icon : 'check_circle_outline'
        });
        if(params.formType == 'representative'){
        commit('representatives/addRepresentative',sentForm.data.representative)
        }else if (params.formType == 'sponsor') {
        commit('sponsors/addSponsor',sentForm.data.sponsor);
          
        }else if (params.formType == 'admin') {
          
        commit('admins/addAdmin',sentForm.data.admin)
        }
      }else{
        params.notify({
          position : 'right-top',
          color : 'danger',
          text : sentForm.data.msg,
          icon : 'warning'
        });
      }
      setTimeout(function(){
        params.closeLoader();
      },1000) 
       return sentForm;
       // sendingForm.data.
    },
    logout(){
      axios.post('admin/ajax/logout').then(res=>{
        window.location.href = process.env.BASE_URL;
      });
    },
    async getSites({commit}){
      // let getSites = await axios.get('admin/ajax/get-sites');
      // console.log(getSites);
      let sites = [{"id":3,"name":"Concrete"},{"id":4,"name":"RPC"}];
      commit('setSites',sites);
    }
}

export default actions
