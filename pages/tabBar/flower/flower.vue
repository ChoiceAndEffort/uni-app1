<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="item in imgList" :key="item.url">
							<view class="swiper-item ">
								<image :src="item.url" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
						name: 'logo',
						url: '/static/b.jpg'
					},
					{
						name: 'logo',
						url: '/static/c.jpg'
					},
					{
						name: 'logo',
						url: '/static/e.png'
					},
					{
						name: 'logo',
						url: '/static/d.png'
					},
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {

		}
	}
</script>

<style>
	.swiper-item {
		height: 300rpx;
	}

	image {
		width: 100%;
		height: 100%;
	}
</style>
