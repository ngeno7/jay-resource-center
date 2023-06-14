export default {
	setSponsors(state,sponsors){
		state.sponsors = sponsors;
	},
	setSponsor(state,sponsor){
		state.sponsor = sponsor;
	},
	addSponsor(state,sponsor){
		state.sponsors.unshift(sponsor)
		// state.brands.unshift()
	},
	updateSponsor(state,sponsor){
		state.sponsor = sponsor;
		// console.log(state.sponsor);
	},
	changeStatus(state,data){
		let index = _.findIndex(state.sponsors,(o)=>{ return o.id == data.id});
		if(data.route == '/approved-sponsors' || data.route == '/un-approved-sponsors'){
		Vue.delete(state.sponsors,index);
		}else{

		state.sponsors[index].user_status = (state.sponsors[index].user_status == 'approved')?'not approved':'approved';
		}
	},
    deleteUser(state,data){
        let index = _.findIndex(state.sponsors,(o)=>{ return o.id == data.id});
        Vue.delete(state.sponsors,index);
    },
	changeStatusSingle(state,data){
		if(_.isUndefined(data.status)){

		state.sponsor.user_status = (state.sponsor.user_status == 'approved')?'not approved':'approved';
		}else{

		state.sponsor.user_status = data.status;
		}
	}
}
