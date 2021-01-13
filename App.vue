<script>
export default {
	onLaunch: function() {
		// console.log('App Launch');
	},
	onShow: function() {
		// console.log('App Show');
	},
	onHide: function() {
		// console.log('App Hide');
	},
	globalData:{
		collect:[],//收藏数据
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
uni-tabbar {
	.uni-tabbar {
		// tab背景
		background-image: linear-gradient(to top, #faf8f8, #ffffff) !important; // tab背景图片或者渐变色，背景色和背景图片最多选择一个进行设置
		.uni-tabbar-border {
			// tabBar上边框
			background-color: #f7f4f4 !important; // tabBar上边框的颜色
		}
		.uni-tabbar__bd {
			// tabBar单项
			.uni-tabbar__icon {
				// 图标
				width: 48upx !important;
				height: 48upx !important;
			}
			.uni-tabbar__label {
				// 文字
				font-size: 20upx !important;
			}
		}
	}
}
</style>
