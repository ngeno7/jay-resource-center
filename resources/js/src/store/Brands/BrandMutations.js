export default {
	setBrands(state,brands){
		state.totalBrandsPages = brands.last_page
		state.brands = brands.data;
	},
	setAllBrands(state,brands){
		state.brands = brands;
	},
	addBrand(state,brand){
		state.brands.unshift(brand)
		state.brands.pop();
		// state.brands.unshift()
	},
	updateBrand(state,brand){
		let index = _.findIndex(state.brands,(o)=>{ return o.brandid == brand.brandid})
		Vue.set(state.brands,index,brand);
	}
}