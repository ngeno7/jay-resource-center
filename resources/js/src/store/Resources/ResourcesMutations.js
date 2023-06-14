export default {
	setResources(state,resources){
		state.resources = resources;
	},
	setResource(state,resource){
		if(resource.keywords != ''){

		resource.keywords = resource.keywords.split(',');
		var obj = [];
		_.each(resource.keywords,(keyword)=>{
			obj.push({text :keyword});
		})
		resource.keywords = obj;
		}else{

		resource.keywords = [];
		}
		if(resource.content_category != ''){

		var content_category = resource.content_category.split(',');
		var obj = [];
		_.each(content_category,(id)=>{
			obj.push(Number(id));
		})
		resource.content_category = obj;
		}else{
		resource.content_category = [];	
		}


		if(resource.content_type != ''){

		var content_type = resource.content_type.split(',');
		var obj = [];
		_.each(content_type,(id)=>{
			obj.push(Number(id));
		})
			resource.content_type = obj;
		}else{
			resource.content_type = [];	
		}
			state.resource = resource;
	},
	setTypes(state,types){
	state.resourceTypes = types;
	},
	changeStatus(state,data){
		let index = _.findIndex(state.resources,(o)=>{ return o.id == data.id});
		if(data.route == '/enabled-resources' || data.route == '/disabled-resources'){
		Vue.delete(state.resources,index);
		}else{
			state.resources[index].adminstatus = (state.resources[index].adminstatus == 'Enable')?'Disable':'Enable';
		}
	}
}