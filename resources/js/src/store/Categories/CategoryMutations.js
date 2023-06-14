export default {
	updateCategory(state,data){
		let index = _.findIndex(state.categories,(o)=>{return  o.category_id == data.category.category_id; });
		Vue.set(state.categories,index,data.category);
	},
	updateSubCategory(state,data){
		let index = _.findIndex(state.subcategories,(o)=>{return  o.category_id == data.category.category_id; });
		Vue.set(state.subcategories,index,data.category);
	},
	setCategories(state,data){
		state.categories = data;
	},
	setSubCategories(state,data){
		state.subcategories = data;
	},
	updateProgress(state,data){
		state.addProgress = data;
	},
	updateStatus(state,data){
		state.categories[data.index].status = data.status;
	},
	updateSubCategoryStatus(state,data){
		state.subcategories[data.index].status = data.status;
	},
	setUserCategories(state,categories){
		state.userCategories = categories;
	}
	
}