export default {
	getSingleSponsor: state => id =>{
		return _.find(state.sponsors,(o)=>{return o.uid == id})
	}	
}