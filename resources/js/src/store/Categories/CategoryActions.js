export default {
    getCategories({ commit }) {
        axios.get('admin/ajax/get-categories').then(res => {
            // console.log(res.data.categories);
            commit('setCategories', res.data.categories)
        })
    },
    getSubCategories({ commit }) {
        axios.get('admin/ajax/get-sub-categories').then(res => {
            // console.log(res.data.categories);
            commit('setSubCategories', res.data.categories)
        })
    },
    submitCategory({ commit, state }, data) {

        let config = {
            onUploadProgress: function(progressEvent) {
                let uploadPercentage = Math.round((progressEvent.loaded * 100) /
                    progressEvent.total);
                commit('updateProgress', uploadPercentage);
            },
        };
        return axios.post('admin/ajax/add-category', data.form, config).then((res) => {
            if (res.data.status == true) {

                if (state.addProgress == 100) {
                    data.notify({
                        position: 'center-top',
                        color: 'success',
                        title: "",
                        text: res.data.msg,
                        icon: 'check_box',
                    })
                    setTimeout(function() {
                        data.closeloading();
                    }, 500)
                    commit('updateProgress', 0);
                }
            } else {
                data.notify({
                    position: 'center-top',
                    color: 'danger',
                    title: "Sorry",
                    text: res.data.msg,
                    icon: 'warning',
                })
                setTimeout(function() {
                    data.closeloading();
                }, 100)
                commit('updateProgress', 0);
            }
            return res;
        })
    },
    updateCategory({ commit, state }, data) {

        let config = {
            onUploadProgress: function(progressEvent) {
                let uploadPercentage = Math.round((progressEvent.loaded * 100) /
                    progressEvent.total);
                commit('updateProgress', uploadPercentage);
            },
        };
        return axios.post('admin/ajax/update-category', data.form, config).then((res) => {
            if (res.data.status == 'true') {

                if (state.addProgress == 100) {
                    data.notify({
                        position: 'center-top',
                        color: 'success',
                        title: "",
                        text: res.data.msg,
                        icon: 'check_box',
                    })
                    setTimeout(function() {
                        data.closeloading();
                    }, 500);
                    commit('updateProgress', 0);
                    commit('updateCategory', { index: data.index, category: res.data.category });
                }
            } else {
                data.notify({
                    position: 'center-top',
                    color: 'danger',
                    title: "Sorry",
                    text: res.data.msg,
                    icon: 'warning',
                })
                setTimeout(function() {
                    data.closeloading();
                }, 100)
                commit('updateProgress', 0);
            }
            return res;
        })
    },
    submitSubCategory({ commit, state }, data) {

        let config = {
            onUploadProgress: function(progressEvent) {
                let uploadPercentage = Math.round((progressEvent.loaded * 100) /
                    progressEvent.total);
                commit('updateProgress', uploadPercentage);
            },
        };
        return axios.post('admin/ajax/add-sub-category', data.form, config).then((res) => {
            if (res.data.status) {

                if (state.addProgress == 100) {
                    data.notify({
                        position: 'center-top',
                        color: 'success',
                        title: "",
                        text: res.data.msg,
                        icon: 'check_box',
                    })
                    setTimeout(function() {
                        data.closeloading();
                    }, 500)
                    commit('updateProgress', 0);
                }
            } else {
                data.notify({
                    position: 'center-top',
                    color: 'danger',
                    title: "Sorry",
                    text: res.data.msg,
                    icon: 'warning',
                })
                setTimeout(function() {
                    data.closeloading();
                }, 100)
                commit('updateProgress', 0);
            }
            return res;
        })
    },
    updateSubCategory({ commit, state }, data) {

        let config = {
            onUploadProgress: function(progressEvent) {
                let uploadPercentage = Math.round((progressEvent.loaded * 100) /
                    progressEvent.total);
                commit('updateProgress', uploadPercentage);
            },
        };
        return axios.post('admin/ajax/update-category', data.form, config).then((res) => {
            if (res.data.status == 'true') {

                if (state.addProgress == 100) {
                    data.notify({
                        position: 'center-top',
                        color: 'success',
                        title: "",
                        text: res.data.msg,
                        icon: 'check_box',
                    })
                    setTimeout(function() {
                        data.closeloading();
                    }, 500);
                    commit('updateProgress', 0);
                    commit('updateSubCategory', { category: res.data.category });
                }
            } else {
                data.notify({
                    position: 'center-top',
                    color: 'danger',
                    title: "Sorry",
                    text: res.data.msg,
                    icon: 'warning',
                })
                setTimeout(function() {
                    data.closeloading();
                }, 100)
                commit('updateProgress', 0);
            }
            return res;
        })
    },
    updateCategoryStatus({ commit }, data) {
        var status = data.status == 0 ? 1 : 0;
        commit('updateStatus', { index: data.index, status: status });
        axios.post('admin/update-category-status', { id: data.id }).then(res => {})
    },
    updateSubCategoryStatus({ commit }, data) {
        var status = data.status == 0 ? 1 : 0;
        commit('updateSubCategoryStatus', { index: data.index, status: status });
        axios.post('admin/update-category-status', { id: data.id }).then(res => {})
    },
    async getUserCategories({ commit },user_id){
        let fetchingCategories = await axios.get('admin/ajax/get-user-categories',{params: {user_id : user_id}});
        let categories = fetchingCategories.data.categories; 
        commit('setUserCategories',categories);
    }
}
