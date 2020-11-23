import { defineComponent, Transition } from 'vue';
import "./index.scss"

const Popup = defineComponent({
    name: 'Popup',
    props: {
        show: {
            type: Boolean,
            default: false
        },
    },
    setup(props, {emit, slots}) {
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

        const renderPopup = ()=> {
            const {show} = props;
            return (
                <div class="popup popup-center" v-show={show}>
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