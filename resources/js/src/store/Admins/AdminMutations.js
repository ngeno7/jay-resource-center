export default {
	setAdmins(state,admins){
		state.admins = admins;
	},
	addAdmin(state,admin){
		state.admins.unshift(admin)
		// state.brands.unshift()
	},	
	updateAdmin(state,admin){
		let index = _.findIndex(state.admins,(o)=>{ return o.adminid == admin.adminid})
		Vue.set(state.admins,index,admin);
	},
	removeAdmin(state,adminid){
		let index = _.findIndex(state.admins,(o)=>{ return o.adminid == adminid});
		Vue.delete(state.admins,index);
	},
	changeStatus(state,adminid){
		let index = _.findIndex(state.admins,(o)=>{ return o.adminid == adminid});
		state.admins[index].status = (state.admins[index].user_status == 'approved')?'not approved':'approved';
	}
}