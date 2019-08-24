import axios from 'axios';
import {BASE_URL} from '../config/api';

export const URL_PATH = {
    CATEGORIES: '/api/categories',
    ARTICLES: '/api/articles',
    RECIPES: '/api/recipes',
}

class FetchApi {
    get = (url, params = undefined) => {
        return axios.get(BASE_URL + url, {
            headers: this.commonHeaders(),
            params,
        });
    };

    post = (url, data) => {
        return axios(BASE_URL + url, {
            method: 'post',
            headers: this.commonHeaders(),
            data: JSON.stringify(data),
        });
    };

    put = (url, data) => {
        return axios(BASE_URL + url, {
            method: 'put',
            headers: this.commonHeaders(),
            data: JSON.stringify(data),
        });
    };

    delete = url => {
        return axios(BASE_URL + url, {
            method: 'delete',
            headers: this.commonHeaders(),
        });
    };

    commonHeaders = () => {
        return {'Content-Type': `application/json`};
    };
}

export const fetchApi = new FetchApi();
