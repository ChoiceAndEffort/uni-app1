<template>
	<view>
		<view class=""><u-tabs-swiper ref="uTabs" :list="tabList" :current="current" :is-scroll="false" @change="tabsChange" swiperWidth="750"></u-tabs-swiper></view>
		<swiper :current="swiperCurrent" @change="swiperChange" style="height: calc(100vh - 100rpx);">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view :key="index" scroll-y style="height: 100%;width: 100%;" @scrolltolower="scrollBottom">
					<template v-for="(el, elIndex) in item.list">
						<view :key="el.name" class="demo-warter">
							<u-lazy-load threshold="-450" border-radius="10" :image="el.image" :index="elIndex" height="100rpx"></u-lazy-load>
							<view class="demo-name">{{ el.name }}</view>
							<view class="demo-bottom">
								<view class="area">{{ el.area }}</view>
								<view class="star">{{ el.star }}</view>
							</view>
						</view>
					</template>

					<view class="show-more-text u-text-center">{{ item.hasMore ? '正在加载中' : '没有更多了' }}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { swiperTabMap } from './constants.js';
export default {
	data() {
		return {
			tabList: [
				{
					name: '肉肉'
				},
				{
					name: '水果'
				},
				{
					name: '粮食'
				}
			],
			tabs: [],
			current: 0,
			swiperCurrent: 0,
			swiperTabMap
		};
	},
	onLoad() {
		this.tabs = JSON.parse(JSON.stringify(swiperTabMap)).map(item => {
			item.list = [];
			item.filters = {
				pageNum: 1,
				pageSize: 10,
				status: item.status
			};
			item.hasMore = true;
			return item;
		});
		this.findList();
	},
	methods: {
		toJSON() {
			return this;
		},
		async findList() {
			if (!this.tabs[this.current].hasMore) return;
			const data = { ...this.tabs[this.current].filters, formPage: 'foods' };
			const res = await this.$ajax('', data);
			if (res.code === 200) {
				const getList = res.data;
				this.tabs[this.current].list.push(...getList);
				this.tabs[this.current].filters.pageNum++;
				this.tabs[this.current].hasMore = getList && getList.length === this.tabs[this.current].filters.pageSize;
				console.log(this.tabs[this.current].hasMore, 5656, getList.length);
				// if (this.tabs[this.current].hasMore) {
				// 	this.tabs[this.current].filters.pageNum++;
				// }
			}
		},
		tabsChange(index) {
			this.current = this.swiperCurrent = index;
			this.findList();
		},
		swiperChange(e) {
			this.current = this.swiperCurrent = e.detail.current;
			this.findList();
		},
		scrollBottom() {
			this.findList();
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-warter {
	border-radius: 8rpx;
	margin: 5rpx;
	background-color: #ffffff;
	padding: 8rpx;
	position: relative;
	border: 2rpx solid #ccc;
}
</style>
