import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
const baseURL = 'http://localhost:5000/jejudo-drone-prototype/us-central1/v1';
const instance: AxiosInstance = Axios.create({
    baseURL,
    timeout: 10000
})

export { baseURL, instance }