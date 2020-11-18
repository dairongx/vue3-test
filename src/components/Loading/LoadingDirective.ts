import {DirectiveBinding} from 'vue';
import Loading from './Loading';

interface loadingEl extends HTMLElement{
    loading: any
}

export default {
    beforeMount(el: loadingEl, binding: DirectiveBinding) {
        if (!el.style.position || el.style.position !== 'static') {
            el.style.position = 'relative';
        }
        if (binding.value) {
            el.loading = Loading({
                container: el,
                duration: 0,
                isMask: false
            })
        }
    },

    updated(el: loadingEl, binding: DirectiveBinding) {
        if (binding.value === binding.oldValue) {
            return;
        }
        if (binding.value) {
            el.loading = Loading({
                container: el,
                duration: 0,
                isMask: false
            })
        } else {
            el.loading.destroy()
        }
    },

    unmounted(el: loadingEl) {
        if (el.loading) {
            el.loading.destroy();
            el.loading = null;
        }
    },

}
