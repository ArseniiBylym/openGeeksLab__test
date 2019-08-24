import {action, thunk, computed} from 'easy-peasy';
import { fetchApi, URL_PATH } from '../api/index';
import { listToTree } from '../utils/helpers';

export const categories = {
    list: [
        {
            parent: null,
            _id: "5d5fa8e471cade1db8cbc7fa",
            name: "dinners",
            createdAt: "2019-08-23T08:50:44.173Z",
            updatedAt: "2019-08-23T14:41:58.540Z",
            __v: 0
        },
        {
            parent: "5d5fa8e471cade1db8cbc7fa",
            _id: "5d5fa99f61248607380a15a8",
            name: "second dinners",
            createdAt: "2019-08-23T08:53:51.658Z",
            updatedAt: "2019-08-23T08:53:51.658Z",
            __v: 0
        },
        {
            parent: "5d5fa99f61248607380a15a8",
            _id: "5d5fd02d8a50282374821d82",
            name: "third dinner",
            createdAt: "2019-08-23T11:38:21.773Z",
            updatedAt: "2019-08-23T11:38:21.773Z",
            __v: 0
        },
        {
            parent: null,
            _id: "5d5fcc1821445714d09fb2c4",
            name: "lunch",
            createdAt: "2019-08-23T11:20:56.599Z",
            updatedAt: "2019-08-23T11:20:56.599Z",
            __v: 0
        },
        {
            parent: "5d5fcc1821445714d09fb2c4",
            _id: "5d5ffb7691b5972e687c4a3d",
            name: "second lunch",
            createdAt: "2019-08-23T14:43:02.079Z",
            updatedAt: "2019-08-23T14:43:02.079Z",
            __v: 0
        },
        {
            parent: null,
            _id: "5d5fd3ea30fd3514a47c62d9",
            name: "breakfast",
            createdAt: "2019-08-23T11:54:18.557Z",
            updatedAt: "2019-08-23T11:54:18.557Z",
            __v: 0
        },
        {
            parent: "5d5fd3ea30fd3514a47c62d9",
            _id: "5d5fd47eaa1d3f26508d56ae",
            name: "second breakfast",
            createdAt: "2019-08-23T11:56:46.809Z",
            updatedAt: "2019-08-23T11:56:46.809Z",
            __v: 0
        },
    ],
    setList: action((state, payload) => {
        state.list = payload
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
        return listToTree(state.list)
    })
};
