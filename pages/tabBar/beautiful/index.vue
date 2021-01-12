<template>
	<view class="beautiful">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="item in imgList" :key="item.url">
							<view class="swiper-item "><image :src="item.url" mode=""></image></view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="u-margin-top-20 u-margin-bottom-20"><u-divider>自然风光展示</u-divider></view>
		<view class="content">
			<u-waterfall v-model="list" ref="uWaterfall">
				<template v-slot:left="{ leftList }">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
						<view class="demo-name">{{ item.name }}</view>
						<view class="demo-bottom">
							<view class="area">{{ item.area }}</view>
							<view class="star">{{ item.star }}</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{ rightList }">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
						<view class="demo-name">{{ item.name }}</view>
						<view class="demo-bottom">
							<view class="area">{{ item.area }}</view>
							<view class="star">{{ item.star }}</view>
						</view>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData" v-if="hasMore"></u-loadmore>
		</view>
	</view>
</template>

<script>
import { imgList, mockList, page1, page2, page3 } from './constants.js';
export default {
	data() {
		return {
			imgList: imgList,
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			loadStatus: 'loadmore',
			loading: false,
			hasMore: true,
			list: [],
			mockList,
			filters: {
				page: 1,
				pageSize: 10
			}
		};
	},
	onShow() {
		// this.getList();
		this.findlist();
	},
	onReachBottom() {
		// this.getList();
		this.findlist();
	},
	methods: {
		toJSON() {
			return this;
		},
		// getList() {
		// 	if (this.loading || !this.hasMore) return;
		// 	this.loading = true;
		// 	this.loadStatus = 'loading';
		// 	setTimeout(() => {
		// 		this.loading = false;
		// 		this.loadStatus = 'loadmore';
		// 		const index = (Math.random() * 3).toFixed();
		// 		const mockArr = [mockList, page1, page2, page3];
		// 		const getList = mockArr[index];
		// 		this.list = this.list.concat(getList);
		// 		this.filters.page++;
		// 		// console.log(this.filters.page, index, getList.length);
		// 		this.hasMore = getList.length === this.filters.pageSize;
		// 		this.loadStatus = getList.length === this.filters.pageSize ? 'loadmore' : 'nomore';
		// 	}, 1000);
		// },
		clear() {
			this.$refs.uWaterfall.clear();
		},
		async findlist() {
			if (this.loading || !this.hasMore) return;
			this.loading = true;
			this.loadStatus = 'loading';
			const res = await this.$ajax('', { fromPage: 'beautiful' });
			this.loading = false;
			this.loadStatus = 'loadmore';
			if (res.code === 200) {
				const getList = res.data;
				this.list = this.list.concat(getList);
				this.filters.page++;
				this.hasMore = getList.length === this.filters.pageSize;
				this.loadStatus = getList.length === this.filters.pageSize ? 'loadmore' : 'nomore';
			}
		}
	}
};
</script>

<style lang="scss">
.beautiful {
	padding: 0 20rpx;
	.swiper-item {
		height: 300rpx;
	}

	image {
		width: 100%;
		height: 100%;
	}
	.page-section {
		border-radius: 10rpx;
	}
	swiper-item {
		border-radius: 10rpx;
	}
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
		border: 2rpx solid #ccc;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-name {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
		font-weight: 600;
	}
	.demo-bottom {
		padding: 10rpx 0;
		display: flex;
		justify-content: space-between;
	}
}
</style>
