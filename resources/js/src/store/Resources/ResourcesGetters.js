export default {
	getResource: state => id=>{
		return _.find(state.resources,(o)=>{return o.resources_id == id})
	}
}