//beautiful的假数据
import {
	imgList,
	mockList,
	page1,
	page2,
	page3
} from '@/pages/tabBar/beautiful/constants.js';

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
				console.log('请求成功返回');
				if (data.fromPage === 'beautiful') {
					const index = (Math.random() * 3).toFixed();
					const mockArr = [mockList, page1, page2, page3];
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
