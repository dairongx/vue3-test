import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Message from './components/Message'
import Loading from './components/Loading'

createApp(App)
    .use(store)
    .use(router)
    .use(Message)
    .use(Loading)
    .mount('#app')
