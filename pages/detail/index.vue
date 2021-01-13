<template>
	<view class="detail">
		<text class="title u-line-2 " style="color:#2979ff">{{ detail.name }}</text>
		<text class="title u-line-2 " style="color:#2979ff">{{ detail.star }}</text>
		<u-lazy-load threshold="-450" border-radius="10" :image="detail.image"  :height="300" img-mode="scaleToFill"></u-lazy-load>
	</view>
</template>

<script>
export default {
	data() {
		return {
			detail: null
		};
	},
	methods: {},
	onLoad(options) {
		console.log(options, 5555555);
		this.detail = options;
	}
};
</script>

<style></style>
