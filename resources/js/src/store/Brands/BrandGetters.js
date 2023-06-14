export default {
	getBrand : state => id =>{
		// console.log(id)
		return _.find(state.brands,(brand)=> { return brand.brandid == id});
	}	
}