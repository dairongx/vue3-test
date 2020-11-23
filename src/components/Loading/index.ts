import {App} from 'vue';
import Loading from './Loading';
import LoadingDirective from './LoadingDirective';

export default {
    install(app: App){
        app.config.globalProperties.$loading = Loading;
        app.directive('Loading',LoadingDirective);
    }
}
