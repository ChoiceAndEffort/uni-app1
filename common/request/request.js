//beautiful的假数据
import {
	imgList,
	mockList,
	page1,
	page2,
	page3
} from '@/pages/tabBar/beautiful/constants.js';
//foods的假数据
import {
	foodsMockPage1,
	foodsMockPage2,
	foodsMockPage3,
	foodsMockPage4,
} from '@/pages/tabBar/foods/constants.js';



const baseUrl = "https://www.baidu.com/"
export default function(URL, sendData, sendMethod = 'post', config = {}) {
	return new Promise((resolve, reject) => {
		const url = `${baseUrl}/${URL}` || baseUrl
		const data = sendData || {}
		const method = sendMethod
		const header = config.header || {
			'Content-Type': config.contentType || 'application/json',
		};
		const dataType = 'json' || config.dataType
		uni.request({
			url,
			data,
			method,
			header,
			success: (res) => {
				console.log('请求成功返回',data);
				if (data.fromPage === 'beautiful') {
					const index = (Math.random() * 3).toFixed();
					const mockArr = [mockList, page1, page2, page3];
					const getList = mockArr[index];
					resolve({
						code:200,
						data:getList
					})
				}else if(data.formPage === 'foods'){
					const index = (Math.random() * 3).toFixed();
					const mockArr = [foodsMockPage1, foodsMockPage2, foodsMockPage3,foodsMockPage4];
					const getList = mockArr[index];
					resolve({
						code:200,
						data:getList
					})
					
				}
			},
			fail: ((err) => {
				reject(err)
				console.log('请求报错了');
			})

		});
	})
}
