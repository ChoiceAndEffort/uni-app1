<template>
	<view>
		<u-grid :col="3">
			<u-grid-item>
				<u-badge :count="collectNum" :offset="[20, 20]"></u-badge>
				<u-icon name="star-fill" :size="46"></u-icon>
				<view class="grid-text">喜爱收藏</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="heart" :size="46"></u-icon>
				<view class="grid-text">加入喜爱</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="more-circle" :size="46"></u-icon>
				<view class="grid-text">浏览记录</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
export default {
	data() {
		return {
			collectNum: 0
		};
	},

	onShow() {
		this.collectNum = getApp().globalData.collect.length;
	},
	methods: {}
};
</script>

<style></style>
