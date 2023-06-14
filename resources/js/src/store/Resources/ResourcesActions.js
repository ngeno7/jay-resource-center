export default {
	async fetchResources({commit},route){
		var fetchingResources = await axios.get('admin/ajax/get-resources?route='+route)
		var fetchedResources = fetchingResources.data.resources;
		commit('setResources',fetchedResources);
	},
    async fetchResource({commit},id){
        var fetchingResource = await axios.get('admin/ajax/get-resource?resources_id='+id)
        var fetchedResource = fetchingResource.data.resource;
        commit('setResource',fetchedResource);
    },
    async fetchSponsorResources({commit},id){
        var fetchingResources = await axios.get('admin/ajax/get-sponsor-resources?id='+id)
        var fetchedResources = fetchingResources.data.resources;
        commit('setResources',fetchedResources);
    },
    async update({commit},data){
        let updatingResource = await axios.post('admin/ajax/update-resource',data.fd);
        if(updatingResource.data.status){
            data.notify({
                position : 'right-top',
                color : 'success',
                text : updatingResource.data.msg,
                icon  : 'checkbox',
            });
        }else{
            data.notify({
                position : 'right-top',
                color : 'danger',
                text : updatingResource.data.msg,
                icon  : 'checkbox',
            });
        }
        setTimeout(function(){
            data.closeLoader();
        },1000)
        return updatingResource;
    },
    async create({commit},data){
        let addingResource = await axios.post('admin/ajax/add-resource',data.fd);
        if(addingResource.data.status){
            data.notify({
                color : 'success',
                text : addingResource.data.msg,
                icon  : 'checkbox',
            });
        }else{
            data.notify({
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