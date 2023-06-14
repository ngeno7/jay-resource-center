export default {
	findAdmin : state => id =>{
		return _.find(state.admins,(o)=>{ return o.adminid == id});
	}	
}