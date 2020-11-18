import {ActionContext} from 'vuex';

interface listType {
    value: string,
    id: number,
    flag: Boolean
}

function getList(): listType[] {
    let todoList: listType[] = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist') as string) : [];
    return todoList;
}

function setList(list: listType[]) {
    localStorage.setItem('todolist', JSON.stringify(list));
}

export default {
    state: {
        todoList: getList()
    },

    mutations: {
        add(state: any, payload: listType) {
            state.todoList.push(payload);
            setList(state.todoList)
        },

        del(state: any, id: number) {
            let newList = state.todoList.filter((item: listType) => item.id !== id);
            state.todoList = newList;
            setList(newList);
        }
    },

    actions: {
        addItem(context: ActionContext<any, any>, payload: string) {
            let id: number = new Date().getTime();
            let item: listType = {
                value: payload,
                id: id,
                flag: false
            };
            context.commit("add", item);
        },

        deleteItem(context: ActionContext<any, any>, payload: number) {
            return new Promise((resolve)=>{
                context.commit("del", payload);
                resolve(1);
            })
        },
    }
}