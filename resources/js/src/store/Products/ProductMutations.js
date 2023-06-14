export default {
	setProducts(state,products){
		state.totalProductsPages = products.last_page
		state.products = products.data;
	},
	addProduct(state,product){
		state.products.unshift(product);
	},
	updateProduct(state,product){
		let index = _.findIndex(state.products,(o)=>{ return o.id == product.id});
		Vue.set(state.products,index,product)
	},
	setProductFeatures(state,data){
		let index = _.findIndex(state.products,(o)=>{ return o.id == data.product_id});
		let product = _.find(state.products,(o)=>{ return o.id == data.product_id});

		let featureIndex = _.findIndex(product.product_features,(o)=>{ return o.id == data.id});
		product.splice(featureIndex,1);
		Vue.set(state.products,index,product)
	},
	deleteProduct(state,id){
		let index = _.findIndex(state.products,(o)=>{ return o.product_id == id});
		Vue.delete(state.products,index)
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