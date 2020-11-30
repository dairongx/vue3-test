import {App} from 'vue'
import Icon from './index.vue'

const Api = {
    install(app: App) {
        app.component(Icon.name, Icon)
    }
}

export default Api