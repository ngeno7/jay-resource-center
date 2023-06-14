export default {
	async fetchSubscribers({commit},route){
		var fetchingSubscribers = await axios.get('admin/ajax/get-subscribers')
		var fetchedSubscribers = fetchingSubscribers.data.subscribers;
		commit('setSubscribers',fetchedSubscribers);
	},
	async changeStatus({commit},data){

		commit('changeStatus',data.id);
		var changeStatus = await axios.post('admin/ajax/change-subscriber-status?id='+data.id)
		if(changeStatus.data.status == true) {
            data.notify({
                position: 'right-top',
                color: 'success',
                text: changeStatus.data.msg,
                icon: 'check_circle_outline'
            });

        } else {
            data.notify({
                position: 'right-top',
                color: 'danger',
                text: changeStatus.data.msg,
                icon: 'warning'
            });
        }
    },
    async upgrade({commit},data){
        commit('changeStatus',data.id);
        var changeStatus = await axios.post('admin/ajax/upgrade-subscriber?id='+data.id)
        if(changeStatus.data.status == true) {
            data.notify({
                position: 'right-top',
                color: 'success',
                text: changeStatus.data.msg,
                icon: 'check_circle_outline'
            });

        } else {
            data.notify({
                position: 'right-top',
                color: 'danger',
                text: changeStatus.data.msg,
                icon: 'warning'
            });
        }
    }
}