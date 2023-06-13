import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8888/api';

export const privateAxios = axios.create({});

privateAxios.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return request;
}, (error) => {
    return Promise.reject(error);
})