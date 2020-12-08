<template>
    <div>
        <button class="buttons" @click="isShow('center')">中间显示popup</button>
        <button class="buttons" @click="isShow('left')">左侧显示popup</button>
        <button class="buttons" @click="isShow('right')">右侧显示popup</button>
        <button class="buttons" @click="isShow('top')">顶部显示popup</button>
        <button class="buttons" @click="isShow('bottom')">底部显示popup</button>
        <Popup 
            v-model:show="centerShow"
            :position="position"
            :round="true"
        >
        您的预约保养信息已经提交成功，经销商会很快与您联系并确认您的预约信息。您还可以绑定车辆，有机会获得售后服务保养优惠券
        </Popup>
        <Popup 
            v-model:show="topShow"
            :position="position"
            :style="{height: '50%'}"
            :round="true"
        >
        您的预约保养信息已经提交成功，经销商会很快与您联系并确认您的预约信息。您还可以绑定车辆，有机会获得售后服务保养优惠券
        </Popup>
        <Popup 
            v-model:show="bottomShow"
            :position="position"
            :round="true"
        >
        您的预约保养信息已经提交成功，经销商会很快与您联系并确认您的预约信息。您还可以绑定车辆，有机会获得售后服务保养优惠券
        </Popup>
        <Popup 
            v-model:show="leftShow"
            :position="position"
            :style="{width: '50%'}"
            :round="true"
        >
        您的预约保养信息已经提交成功，经销商会很快与您联系并确认您的预约信息。您还可以绑定车辆，有机会获得售后服务保养优惠券
        </Popup>
        <Popup 
            v-model:show="rightShow"
            :position="position"
            :round="true"
        >
        您的预约保养信息已经提交成功，经销商会很快与您联系并确认您的预约信息。您还可以绑定车辆，有机会获得售后服务保养优惠券
        </Popup>
        <van-badge :content="200" max="99" />
        <!-- <van-button text="按钮"></van-button> -->
        <!-- <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group> -->
    </div>
</template>

<script>
import Popup from '@/components/Popup/index.tsx'
    export default {
        data() {
            return {
                centerShow: false,
                topShow: false,
                bottomShow: false,
                leftShow: false,
                rightShow: false, 
                position: 'top',
                width: 0
            }
        },
        components: {
            Popup
        },
        methods: {
            isShow(position) {
                if(position == 'top') {
                    this.topShow = true;
                } else if(position == 'bottom') {
                    this.bottomShow = true;
                } else if(position == 'left') {
                    this.leftShow = true
                } else if(position == 'right') {
                    this.rightShow = true
                } else {
                    this.centerShow = true
                }
                this.position = position;
            }
        }
    }
</script>

<style lang="scss" scoped>
.buttons {
    padding: 10px;
    display: block;
}
</style>