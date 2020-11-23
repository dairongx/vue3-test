import {fun} from './types';

export function throttle(fn: fun<any>, time: number): fun<any> {
    let timer: any = null;
    return (...args: any[]) => {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(null, args);
            timer = null;
        }, time)
    }
}

export function debounce(fn: fun<any>, time: number): fun<any> {
    let timer: any = null;
    return function (...args: any[]) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(null, args);
            timer = null;
        }, time)
    }
}

export function compose(arr: fun<any>[]): fun<any> {
    return function (args: any) {
        return arr.reduce((params, item) => {
            return item(params);
        }, args);
    }
}

type ScrollElement = HTMLElement | Window;

export function getScrollDom(element: HTMLElement, rootElement: ScrollElement = window) {
    let node: HTMLElement = element;

    while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootElement) {
        let overFlowY = window.getComputedStyle(node).overflowY;

        if (overFlowY === 'scroll' || overFlowY === 'auto') {
            return node
        }

        node = node.parentNode as HTMLElement;
    }

    return rootElement;
}