export default {
	getProduct: state => id=>{
		return _.find(state.products,(o)=>{return o.product_id == id})
	}
}