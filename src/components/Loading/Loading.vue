<template>
    <div :class="['loading-wrap',textVertical?'vertical':'horizontal']" :style="maskStyle">
        <slot name="icon">
            <div class="loading" :style="loadingStyle"></div>
        </slot>
        <span v-if="loadingText">{{loadingText}}</span>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        props: {
            color: {
                type: String,
                default: '#1989fa'
            },
            size: {
                type: Number,
                default: 30
            },
            loadingText: String,
            textVertical: {
                type: Boolean,
                default: true
            },
        },
        data(){
            return {
                maskStyle:{}
            }
        },
        computed:{
            loadingStyle(){
                return {
                    border: `${this.size/10}px solid ${this.color}`,
                    borderBottom: `${this.size/10}px solid #aaa`,
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                }
            },
        }
    }
</script>

<style scoped>
    .loading-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .vertical{
        flex-direction: column;
    }

    .horizontal{
        flex-direction: row;
    }

    .vertical span{
        margin-top: 10px;
    }

    .horizontal span{
        margin-left: 10px;
    }

    .loading {
        border-radius:50%;
        animation:load 1.1s infinite linear;
        -webkit-animation:load 1.1s infinite linear;
        -moz-animation:load 1.1s infinite linear;
        -o-animation:load 1.1s infinite linear;
    }
    @keyframes load {
        from {
            transform:rotate(0deg);
            -ms-transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
            -ms-transform:rotate(360deg);
        }
    }@-webkit-keyframes load {
         from {
             -webkit-transform:rotate(0deg);
         }
         to {
             -webkit-transform:rotate(360deg);
         }
     }@-moz-keyframes load {
          from {
              -moz-transform:rotate(0deg);
          }
          to {
              -moz-transform:rotate(360deg);
          }
      }@-o-keyframes load {
           from {
               -o-transform:rotate(0deg);
           }
           to {
               -o-transform:rotate(360deg);
           }
       }
</style>