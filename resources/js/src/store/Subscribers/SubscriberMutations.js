export default {
	setSubscribers(state,subscribers){
		state.subscribers = subscribers;
	},
	changeStatus(state,id){
		let index = _.findIndex(state.subscribers,(o)=>{ return o.id == id});
		state.subscribers[index].user_status = (state.subscribers[index].user_status == 'approved')?'not approved':'approved';
	}
}