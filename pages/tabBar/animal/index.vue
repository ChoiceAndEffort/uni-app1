<template>
	<view class="animal  u-padding-10">
		<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in list" :key="item.id" @click="click" @open="open" :options="options">
			<view class="item u-border-bottom ">
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="title-wrap u-padding-10">
					<text class="title u-line-2 " style="color:#2979ff">{{ item.name }}</text>
				</view>
				<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" :height="300" img-mode="scaleToFill"></u-lazy-load>
			</view>
		</u-swipe-action>

		<!-- 		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData" v-if="hasMore"></u-loadmore> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			options: [
				{
					text: '收藏',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			]
		};
	},
	onShow() {
		this.findList();
	},
	methods: {
		toJSON() {
			return this;
		},
		click(index, index1) {
			if (index1 == 1) {
				this.list.splice(index, 1);
				this.$u.toast(`删除了第${index}个cell`);
			} else {
				this.list[index].show = false;
				this.$u.toast(`收藏成功`);
			}
		},
		// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
		open(index) {
			// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
			// 原本为'false'，再次设置为'false'会无效
			this.list[index].show = true;
			this.list.map((val, idx) => {
				if (index != idx) this.list[idx].show = false;
			});
		},
		async findList() {
			const res = await this.$ajax('', { fromPage: 'animal' });
			if (res.code === 200) {
				const getList = res.data;
				this.list = this.list.concat(getList);
			}
		}
	}
};
</script>

<style></style>
