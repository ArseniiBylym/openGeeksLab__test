import {action, thunk, computed} from 'easy-peasy';
import { fetchApi, URL_PATH } from '../api/index';
import { listToTree } from '../utils/helpers';

export const categories = {
    list: null,
    setList: action((state, payload) => {
        state.list = payload
    }),
    addCategory: action((state, payload) => {
        state.list = [...state.list, payload]
    }),
    updateCategory: action((state, payload) => {
        state.list = state.list.map(item => {
            if (item._id === payload._id) return payload;
            return item;
        })
    }),
    deleteCategory: action((state, payload) => {
        state.list = state.list.filter(item => item._id !== payload._id)
    }),
    error: false,
    setError: action((state, payload) => {
        state.error = payload
    }),
    fetchCategories: thunk(async (actions, payload) => {
        try {
            const categories = await fetchApi.get(URL_PATH.CATEGORIES);
            actions.setList(categories.data);
        } catch (error) {
            actions.setError(error);
        }
    }),
    tree: computed(state => {
        if (!state.list) return null;
        return listToTree(state.list)
    }),
    breadcrumbsUpdateTrigger: false,
    runBreadcrumbsUpdateTrigger: action((state, payload) => {
        state.breadcrumbsUpdateTrigger = !state.breadcrumbsUpdateTrigger;
    })

};
