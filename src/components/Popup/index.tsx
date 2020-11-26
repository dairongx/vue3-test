import { defineComponent, Transition } from 'vue';
import "./index.scss"

const Popup = defineComponent({
    name: 'Popup',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'center'
        }
    },
    setup(props, {emit, attrs, slots}) {
        console.log(attrs);
        
        const clone = ()=> {
            emit("update:show", false)
        }
        const onCkickMask = ()=> {
            clone()
        }
        const renderMask = () => {
            return (
                <Transition name={'fade'}>
                    <div class="mask" v-show={props.show} onClick={onCkickMask}></div>
                </Transition>
            ) 
        }

        const style = () => {
            const {position} = props;
            const obj = {
                'top': 'popup-top',
                'bottom:': 'popup-bottom',
                'left': 'popup-left',
                'right': 'popup-right',
                'center': 'popup-center'
            }
            if(position == 'top') {
                return 'popup-top'
            } else if(position == 'bottom') {
                return 'popup-bottom'
            }  else if(position == 'left') {
                return 'popup-left'
            }  else if(position == 'right') {
                return 'popup-right'
            } else {
                return 'popup-center'
            }
        }

        const renderPopup = ()=> {
            const {show} = props;
            console.log('attrs',{...attrs});
            
            return (
                <div class={['popup',style()]} v-show={show} {...attrs}>
                    <span>
                    {slots.default?.()}
                    </span>
                </div>
            )
        }

        const renderTransition = ()=> {
            return (
                <Transition name={'fade'}>
                    {renderPopup()}
                </Transition>
            )
        }
        return () => {
            console.log(props)
            return (
                <div>
                    {renderMask()}
                    {renderTransition()}
                </div>
                
            )
        }
    }
})

export default Popup