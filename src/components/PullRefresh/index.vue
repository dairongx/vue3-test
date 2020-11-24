<template>
    <div class="refresh" ref="refresh">
        <div class="pull-refresh"
             @touchstart="onTouchStart"
             @touchmove="onTouchMove"
             @touchend="onTouchEnd"
             :style="pullStyle"
        >
            <div class="pxToVwBlack_pull-refresh-head">
                <span v-show="pullStatus==='success'">{{successText}}</span>
                <span v-show="pullStatus==='pulling'">{{pullingText}}</span>
                <span v-show="pullStatus==='loosing'">{{loosingText}}</span>
                <span v-show="pullStatus==='loading'">{{loadingText}}</span>
            </div>

            <div class="pull-refresh-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, watch, onMounted, nextTick} from 'vue';
    import {getScrollDom} from '@/utils/utils';

    const DEFAULT_MIN_HEAD_HEIGHT = 50;
    const PULL_STATUS = ['pulling', 'loosing', 'loading', 'success'];

    export default defineComponent({
        name: "pullRefresh",
        props: {
            successText: {
                type: String,
                default: '刷新成功',
            },
            pullingText: {
                type: String,
                default: '下拉刷新',
            },
            loosingText: {
                type: String,
                default: '释放刷新',
            },
            loadingText: {
                type: String,
                default: '正在刷新',
            },
            modelValue: {
                type: Boolean,
                required: true,
            },
            successDuration: {
                type: Number,
                default: 0
            }
        },

        setup(props, {emit}) {

            let startY = 0;
            let offsetY = 0;
            let isStartPull = false;
            let isPull = false;
            let ceiling = false;
            let scrollEl = null;
            let oldOverflowStyle = '';

            let refresh = ref(null);
            let pullStatus = ref('');
            let pullStyle = ref('transition-duration: 300ms;');

            onMounted(() => {
                nextTick(() => {
                    scrollEl = getScrollDom(refresh.value);
                    let el = scrollEl === window ? document.body : scrollEl;
                    oldOverflowStyle = window.getComputedStyle(el).overflowY;
                })
            });

            function checkScrollTop() {
                let y = 'scrollTop' in scrollEl ? scrollEl.scrollTop : scrollEl.pageYOffset;
                ceiling = y === 0;
                return ceiling;
            }

            function setOverflowHide() {
                let el = scrollEl === window ? document.body : scrollEl;
                el.style.overflowY = 'hidden';
            }

            function resetOverflow() {
                let el = scrollEl === window ? document.body : scrollEl;
                el.style.overflowY = oldOverflowStyle;
            }

            function onTouchStart(e) {
                if (!checkScrollTop() || isStartPull || isPull) {
                    return;
                }
                setOverflowHide();
                isStartPull = true;
                startY = e.touches[0].clientY;
                pullStatus.value = PULL_STATUS[0];
                setStyle(0);
            }

            function onTouchMove(e) {
                if (!ceiling || isPull) {
                    return;
                }
                offsetY = e.touches[0].clientY - startY;
                setStyle(offsetY);
                if (offsetY > DEFAULT_MIN_HEAD_HEIGHT) {
                    pullStatus.value = PULL_STATUS[1];
                } else {
                    pullStatus.value = PULL_STATUS[0];
                }
            }

            function onTouchEnd() {
                if (!ceiling || isPull) {
                    return;
                }
                if (offsetY > DEFAULT_MIN_HEAD_HEIGHT) {
                    pullStatus.value = PULL_STATUS[2];
                    isPull = true;
                    emit('update:modelValue', true);
                    emit('onRefresh');
                    setStyle(DEFAULT_MIN_HEAD_HEIGHT, 300);
                    let stop = watch(props, (value) => {
                        if (!value.modelValue && isPull) {
                            pullStatus.value = PULL_STATUS[3];
                            stop();
                            setTimeout(() => {
                                reset();
                                setStyle(0, 300);
                            }, props.successDuration);
                        }
                    });
                } else {
                    pullStatus.value = PULL_STATUS[0];
                    reset();
                    setStyle(0, 300);
                }
            }

            function setStyle(offset, duration = 0) {
                let transformY = offset;
                if (offset > DEFAULT_MIN_HEAD_HEIGHT * 2) {
                    transformY = DEFAULT_MIN_HEAD_HEIGHT * 2 + (offset - DEFAULT_MIN_HEAD_HEIGHT * 2) / 4
                }
                if (offset <= 0) {
                    pullStyle.value = `transition-duration: ${duration}ms;`;
                } else {
                    pullStyle.value = `transition-duration: ${duration}ms;transform: translate3d(0,${transformY}px,0);`;
                }
            }

            function reset() {
                startY = 0;
                offsetY = 0;
                isStartPull = false;
                isPull = false;
                resetOverflow();
            }


            return {
                pullStatus,
                pullStyle,
                refresh,
                onTouchStart,
                onTouchMove,
                onTouchEnd
            }
        }
    })
</script>

<style scoped>
    .refresh {
        user-select: none;
        overflow: hidden;
    }

    .pull-refresh {
        display: block;
        width: 100%;
        height: 100%;
    }

    .pxToVwBlack_pull-refresh-head {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        overflow: hidden;
        color: #666;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        transform: translate3d(0, -100%, 0);
    }
</style>