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
        const clone = ()=> {
            emit("update:show", false)
        };
        const onCkickMask = ()=> {
            clone()
        };
        const renderMask = () => {
            return (
                <Transition name={'fade'}>
                    <div class="popup-mask" v-show={props.show} onClick={onCkickMask}></div>
                </Transition>
            ) 
        };

        const renderPopup = ()=> {
            const {show, position} = props;
            return (
                <div class={['popup','popup-'+position]} v-show={show} {...attrs}>
                    <span>
                    {slots.default?.()}
                    </span>
                </div>
            )
        };

        const renderTransition = ()=> {
            const {position} = props;
            const name = position === 'center' ? 'fade':'popup-slide-'+position;
            return (
                <Transition name={name}>
                    {renderPopup()}
                </Transition>
            )
        };

        return () => {
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