export default{
	findCategory: (state) => (id) => {
		return _.find(state.categories,(o)=>{return o.category_id == id});
	},
	findSubCategories: (state) => (id) => {
		let index = _.findIndex(state.categories,o => { return o.category_id == id});
		return state.categories[index].subcategories;
	},
	findSubCategory: (state) => (id) => {
		return _.find(state.subcategories,(o)=>{return o.category_id == id});
	},
}