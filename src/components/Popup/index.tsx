import { defineComponent } from 'vue';
import "./index.scss"

interface PopupProps {
  value: string;
  onChange: (value: string) => void;
}
const Popup = defineComponent({
    name: 'Popup',
    setup(props) {
        return () => {
            return (
                <div class="popup">
                    <h1>popup</h1>
                </div>
            )
        }
    }
})

export default Popup