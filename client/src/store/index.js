import {createStore} from 'easy-peasy';

import {categories} from './categories'

const storeModel = {
    categories
};

export const store = createStore(storeModel);
