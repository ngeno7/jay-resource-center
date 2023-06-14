export default {
	async fetchIndustries({commit},params){
		var fetchingIndustries = await axios.get('admin/ajax/get-industries?q='+params.search+'&page='+params.page)

		var fetchedIndustries = fetchingIndustries.data.industries;
		commit('setIndustries',fetchedIndustries);
	},
	async getIndustries({commit},params){
		var fetchingIndustries = await axios.get('admin/ajax/get-all-industries')

		var fetchedIndustries = fetchingIndustries.data.industries;
		commit('setAllIndustries',fetchedIndustries);
	},
	create({commit},data){
		return axios.post('admin/ajax/add-industry',data.fd).then(res=>{
			if(res.data.status == true){
				data.notify({
					position : 'right-top',
					color : 'success',
					text : res.data.msg,
					icon : 'check_circle_outline'
				});
				commit('addIndustry',res.data.industry)
			}else{
				data.notify({
					position : 'right-top',
					color : 'danger',
					text : res.data.msg,
					icon : 'warning'
				});
			}
			setTimeout(function(){
				data.closeLoader();
			},1000)
			return res;
		})
	},
	update({commit},data){
		return axios.post('admin/ajax/update-industry',data.fd).then(res=>{
			if(res.data.status == true){
				data.notify({
					position : 'right-top',
					color : 'success',
					text : res.data.msg,
					icon : 'check_circle_outline'
				});
			commit('updateIndustry',res.data.industry)
			}else{
				data.notify({
					position : 'right-top',
					color : 'danger',
					text : res.data.msg,
					icon : 'warning'
				});
			}
			setTimeout(function(){
				data.closeLoader();
			},1000)
			return res;
		})
	}
}