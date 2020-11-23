import {createApp, App, defineComponent, h} from 'vue';
import Loading from './Loading.vue';

let LoadingInstance: any;

interface LoadingConfig {
    color?: string,
    size?: number,
    duration?: number,
    loadingText?: string,
    textVertical?: boolean,
    isMask?: boolean,
    container?: string | HTMLElement
}

const defaultConfig: LoadingConfig = {
    duration: 2000,
    isMask: true,
};

function createLoadingInstance(config: LoadingConfig = defaultConfig) {
    if (LoadingInstance) {
        return LoadingInstance;
    }

    if (config.isMask === undefined) {
        config.isMask = true;
    }

    if (config.duration === undefined) {
        config.duration = 2000;
    }

    const div: HTMLElement = document.createElement('div');
    if (config.container) {
        let container: HTMLElement | any;
        if (typeof config.container === 'string') {
            container = document.querySelector(config.container);
        } else {
            container = config.container;
        }
        container.appendChild(div);
    } else {
        document.body.appendChild(div);
    }

    let maskStyle = setStyle(div, config.isMask);

    const app: App = createApp(defineComponent({
        render() {
            let props = JSON.parse(JSON.stringify(config));
            delete props.duration;
            delete props.container;
            delete props.isMask;

            return h(Loading, {
                ...props,
                style: maskStyle
            })
        }
    }));
    app.mount(div);

    if (config.duration !== 0) {
        setTimeout(() => {
            LoadingInstance.destroy();
        }, config.duration)
    }

    function destroy() {
        app.unmount(div);
        LoadingInstance = null;
        if (div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }

    LoadingInstance = {
        destroy
    };
    return LoadingInstance;
}

function setStyle(container: HTMLElement, isMask: boolean) {
    let style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 'auto',
        height: 'auto',
        backgroundColor: 'transparent',
        color: ''
    };
    if (!container.parentElement || !isMask) {
        return style;
    }
    let parent: HTMLElement = container.parentElement;
    style.width = parent.clientWidth + 'px';
    style.height = parent.clientHeight + 'px';
    style.backgroundColor = 'rgba(0,0,0,0.6)';
    style.color = '#fff';
    return style;
}

export default createLoadingInstance;