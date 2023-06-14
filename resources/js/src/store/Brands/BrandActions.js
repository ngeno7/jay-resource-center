export default {
	async fetchBrands({commit},params){
		var fetchingBrands = await axios.get('admin/ajax/get-brands?q='+params.search+'&page='+params.page)

		var fetchedBrands = fetchingBrands.data.brands;
		commit('setBrands',fetchedBrands);
	},
	async getBrands({commit}){
		var fetchingBrands = await axios.get('admin/ajax/get-all-brands')

		var fetchedBrands = fetchingBrands.data.brands;
		commit('setAllBrands',fetchedBrands);
	},
	create({commit},data){
		return axios.post('admin/ajax/add-brand',data.fd).then(res=>{
			if(res.data.status == true){
				data.notify({
					position : 'right-top',
					color : 'success',
					text : res.data.msg,
					icon : 'check_circle_outline'
				});
				commit('addBrand',res.data.brand)
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
		return axios.post('admin/ajax/update-brand',data.fd).then(res=>{
			if(res.data.status == true){
				data.notify({
					position : 'right-top',
					color : 'success',
					text : res.data.msg,
					icon : 'check_circle_outline'
				});
			commit('updateBrand',res.data.brand)
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