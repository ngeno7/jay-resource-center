export default {
	async fetchAdmins({commit},route){
		var fetchingAdmins = await axios.get('admin/ajax/get-admins?route='+route)
		var fetchedAdmins = fetchingAdmins.data.admins;
		commit('setAdmins',fetchedAdmins);
	},
    update({ commit }, data) {
        return axios.post('admin/ajax/update-admin', data.fd).then(res => {
            if (res.data.status == true) {
                data.notify({
                    position: 'right-top',
                    color: 'success',
                    text: res.data.msg,
                    icon: 'check_circle_outline'
                });
                commit('updateAdmin', res.data.admin)
            } else {
                data.notify({
                    position: 'right-top',
                    color: 'danger',
                    text: res.data.msg,
                    icon: 'warning'
                });
            }
            setTimeout(function() {
                data.closeLoader();
            }, 1000)
            return res;
        })
    },
    async deleteAdmin({ commit }, data) {
        let deleteAdmin = await axios.post('admin/ajax/delete-admin?id=' + data.id);
        if(deleteAdmin.data.status == true) {
            data.notify({
                position: 'right-top',
                color: 'success',
                text: deleteAdmin.data.msg,
                icon: 'check_circle_outline'
            });
            commit('removeAdmin', data.id);
        } else {
            data.notify({
                position: 'right-top',
                color: 'danger',
                text: deleteAdmin.data.msg,
                icon: 'warning'
            });
        }
    }	
}