const tabBar='/pages/tabBar'
const pages='/pages'
export default{
	Animal:{
		path:`${tabBar}/animal/index`,
		auth:false
	},
	Beautiful:{
		path:`${tabBar}/beautiful/index`,
		auth:false
	},
	Foods:{
		path:`${tabBar}/foods/index`,
		auth:false
	},
	Me:{
		path:`${tabBar}/me/index`,
		auth:false
	},
	Detail:{
		// path:'/pages/detail/index',
		path:`${pages}/detail/index`,
		auth:false
	}
}