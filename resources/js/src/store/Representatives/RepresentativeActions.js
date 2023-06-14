export default {
    async fetchRepresentatives({ commit }, route) {
        var fetchingRepresentatives = await axios.get('admin/ajax/get-representatives')
        var fetchedRepresentatives = fetchingRepresentatives.data.representatives;
        commit('setRepresentatives', fetchedRepresentatives);
    },
    update({ commit }, data) {
        return axios.post('admin/ajax/update-representative', data.fd).then(res => {
            if (res.data.status == true) {
                data.notify({
                    position: 'right-top',
                    color: 'success',
                    text: res.data.msg,
                    icon: 'check_circle_outline'
                });
                commit('updateRepresentative', res.data.representative)
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
    async deleteRep({ commit }, data) {
        let deleteRepresentative = await axios.post('admin/ajax/delete-representative?id=' + data.id);
        if(deleteRepresentative.data.status == true) {
            data.notify({
                position: 'right-top',
                color: 'success',
                text: deleteRepresentative.data.msg,
                icon: 'check_circle_outline'
            });
            commit('removeRepresentative', data.id);
        } else {
            data.notify({
                position: 'right-top',
                color: 'danger',
                text: deleteRepresentative.data.msg,
                icon: 'warning'
            });
        }
    }
}
