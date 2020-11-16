import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Message from './components/Message'

createApp(App).use(store).use(router).use(Message).mount('#app')
