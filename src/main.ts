import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Message from './components/Message'
import Loading from './components/Loading'
import Popup from './components/Popup'
import Icon from './components/Icon'
import './assets/iconfont/iconfont.css'

// vant
import {Badge, Button, Cell, CellGroup} from 'vant'

createApp(App)
    .use(store)
    .use(router)
    .use(Message)
    .use(Loading)
    .use(Icon)
    .component("Popup",Popup)
    .component(Badge.name, Badge)
    .component(Button.name, Button)
    .component(CellGroup.name,CellGroup)
    .component(Cell.name,Cell)
    .mount('#app')
