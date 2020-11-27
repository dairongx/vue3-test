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
        },
        round: {
            type: Boolean,
            default: false
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

        const getClass = () => {
            const {round, position} = props;
            const classArr = ['popup'];
            const baseName = 'popup-';
            classArr.push(round ? baseName+"round-"+position:'');
            classArr.push(baseName+position);
            return classArr;
        }

        const renderPopup = ()=> {
            const {show} = props;
            return (
                <div class={getClass()} v-show={show} {...attrs}>
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