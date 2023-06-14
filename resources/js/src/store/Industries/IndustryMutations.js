export default {
	setIndustries(state,industries){
		state.totalIndustriesPages = industries.last_page
		state.industries = industries.data;
	},
	setAllIndustries(state,industries){
		state.industries = industries;
	},
	addIndustry(state,industry){
		state.industries.unshift(industry)
		state.industries.pop();
		// state.brands.unshift()
	},
	updateIndustry(state,industry){
		let index = _.findIndex(state.industries,(o)=>{ return o.industryid == industry.industryid})
		Vue.set(state.industries,index,industry);
	}
}