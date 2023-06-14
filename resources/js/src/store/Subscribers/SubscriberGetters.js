export default {
	findSubscriber : state => id =>{
		return _.find(state.subscribers,(o)=>{return o.uid == id});
	}	
}