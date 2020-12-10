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
import { Button } from 'vant'

createApp(App)
    .use(store)
    .use(router)
    .use(Message)
    .use(Loading)
    .use(Icon)
    .component("Popup",Popup)
    .mount('#app')
