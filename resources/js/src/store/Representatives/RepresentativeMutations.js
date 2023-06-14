export default {
	setRepresentatives(state,representatives){
		state.representatives = representatives;
	},
	addRepresentative(state,representative){
		state.representatives.unshift(representative)
		// state.brands.unshift()
	},
	updateRepresentative(state,representative){
		let index = _.findIndex(state.representatives,(o)=>{ return o.id == representative.id})
		Vue.set(state.representatives,index,representative);
	},
	removeRepresentative(state,id){
		let index = _.findIndex(state.representatives,(o)=>{ return o.id == id});
		Vue.delete(state.representatives,index);
	}
}