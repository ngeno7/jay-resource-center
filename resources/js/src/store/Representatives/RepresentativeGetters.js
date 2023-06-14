export default {
	findSaleRep : state => id =>{
		return _.find(state.representatives,(o)=>{ return o.id == id});
	}	
}