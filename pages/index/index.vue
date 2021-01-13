<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<button type="default" @click="handleStart">开启小程序之旅</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello, 西藏'
		};
	},
	onLoad() {
		const url = '/pages/tabBar/animal/index';
		uni.reLaunch({
			url: url
		});
	},
	methods: {
		handleStart() {
			const url = '/pages/tabBar/beautiful/index';
			// uni.reLaunch({
			// 	url: url
			// });
			this.$router.push(url, {}, 'reLaunch');//使用的是封装的方法
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
button {
	margin-top: 100rpx;
}
</style>
