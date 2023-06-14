export default {
	async fetchProducts({commit},params){
        let fetchingProducts = await axios.get('admin/ajax/get-products?user_id='+params.user_id+'&q='+params.search+'&page='+params.page)

        var fetchedProducts = fetchingProducts.data.products;
        commit('setProducts',fetchedProducts);
    },
    async fetchSponsorResources({commit},id){
        var fetchingResources = await axios.get('admin/ajax/get-sponsor-resources?id='+id)
        var fetchedResources = fetchingResources.data.resources;
        commit('setResources',fetchedResources);
    },
    async deleteFeature({commit},data){
        let deletingFeature = await axios.post('admin/ajax/delete-product-feature?id='+data.id);
            commit('updateProduct',{product_id : data.product_id, id : data.id})
        return deletingFeature;
    },
    async deleteProduct({commit},data){
        let deletingProduct = await axios.post('admin/ajax/delete-product?id='+data.product_id);
        if(deletingProduct.data.status){
            data.notify({
                position : 'right-top',
                color : 'success',
                text : deletingProduct.data.msg,
                icon  : 'checkbox',
            });
            commit('deleteProduct',data.product_id)
        }else{
            data.notify({
                position : 'right-top',
                color : 'danger',
                text : deletingProduct.data.msg,
                icon  : 'checkbox',
            });
        }
        setTimeout(function(){
            data.closeLoader();
        },1000)
        return updatingResource ;
    },
    async update({commit},data){
        let updatingProduct = await axios.post('admin/ajax/update-product',data.fd);
        if(updatingProduct.data.status){
            data.notify({
                position : 'right-top',
                color : 'success',
                text : updatingProduct.data.msg,
                icon  : 'checkbox',
            });
            commit('updateProduct',updatingProduct.data.product)
        }else{
            data.notify({
                position : 'right-top',
                color : 'danger',
                text : updatingProduct.data.msg,
                icon  : 'checkbox',
            });
        }
        setTimeout(function(){
            data.closeLoader();
        },1000)
        return updatingProduct;
    },
    async create({commit},data){
        let addingResource = await axios.post('admin/ajax/add-product',data.fd);
        if(addingResource.data.status){
            data.notify({
                position : 'right-top',
                color : 'success',
                text : addingResource.data.msg,
                icon  : 'checkbox',
            });
            commit('addProduct',addingResource.data.products);
        }else{
            data.notify({
                position : 'right-top',
                color : 'danger',
                text : addingResource.data.msg,
                icon  : 'checkbox',
            });
        }
        setTimeout(function(){
            data.closeLoader();
        },1000)
        return addingResource;
    },
    async fetchResourceTypes({commit}){
        var fetchingTypes = await axios.get('admin/ajax/get-resource-types')
        var fetchedTypes = fetchingTypes.data.types;
        commit('setTypes',fetchedTypes);
    },
	async changeStatus({commit},data){

		commit('changeStatus',{id : data.id, route : data.route});
		var changeStatus = await axios.post('admin/ajax/change-resource-status?id='+data.id)
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