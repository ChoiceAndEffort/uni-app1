import routerMap from './routerMap.js'
import Vue from 'vue'
/* 
 *name:跳转路由的别名,别名来源routerMap.js,
 *params:跳转的传递的参数,用于拼接到url上;
 *routerMethods:navigateTo,redirectTo,reLanch,switchTab,navigateBack,,
 * 
 * 
 * */
export default function(name, params, routerMethod) {
	const pages = getCurrentPages(); // 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
	const tabBarList = ['Animal', 'Beautiful', 'Foods', 'Me']; //tabBar的页面
		let jumpRouterMethod = 'navigateTo'; //默认页面的跳转方法;
	let url; //默认的跳转url
	if (pages.length >= 9) {
		//因为使用navigateTo跳转页面时保留当前页面跳转到其它页面 ,
		//当超出页面栈时,使用redirectTo关闭当前页面跳转到应用内某个页面
		jumpRouterMethod = 'redirectTo'
	}

	if (tabBarList.includes(name)) {
		//判断是否为tabBar导航栏页面,如果是使用 switchTab 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
		jumpRouterMethod = 'switchTab';
		params = {}
	}

	if (routerMethod) {
		//如果指定了跳转模式,则使用指定的跳转模式
		jumpRouterMethod = routerMethod;
	}
	if (!routerMap[name]) {
		console.error(`找不到该路由地址,请确保该路由地址)(${name})填写正确`)
		return;
	}
	url = `${routerMap[name].path}`;
	if (params && Object.entries(params).length) {
		url = `${url}?`;
		Object.entries(params).forEach(([key, value], index) => {
			url += `${key}=${value}${index===  Object.entries(params).length-1?'':'&'}`
		});
	}
	if (routerMap[name].auth) { //可以扩展增加登陆状态的数据的判断,在需要的时候
		console.log('需要登录,跳转到登陆页', );
		// uni[jumpRouterMethod]({url})
		return;
	}
	console.log(url,jumpRouterMethod,6666);
	// 不需要登录 直接跳转
	uni[jumpRouterMethod]({
		url,
	})
}
