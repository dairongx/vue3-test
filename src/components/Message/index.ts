import {createApp, defineComponent, h, App} from 'vue';
import Message from './Message.vue';

let messageInstance: any;

interface MessageConfig {
    content: string,
    duration: number,
    type: string,
    onClose: () => void
}

function createMsgInstance(config: MessageConfig) {
    if (messageInstance) {
        return messageInstance;
    }

    const div: HTMLElement = document.createElement('div');
    document.body.appendChild(div);

    const app = createApp(defineComponent({
        render() {
            return h(Message, {
                ...config,
                ref: 'message',
                onClose: () => {
                    if (messageInstance) {
                        messageInstance.destroy();
                    }
                }
            })
        }
    }));
    app.mount(div);

    function destroy() {
        app.unmount(div);
        messageInstance = null;
        if (div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }

    messageInstance = {
        destroy,
        component: app
    };
    return destroy;
}

const Api = {
    install(app: App): void {
        app.config.globalProperties.$message = createMsgInstance
    }
};

export default Api;