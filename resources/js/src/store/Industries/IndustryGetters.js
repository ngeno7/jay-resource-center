export default {
	getIndustry : state => id =>{
		// console.log(id)
		return _.find(state.industries,(industry)=> { return industry.industryid == id});
	}	
}