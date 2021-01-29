import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
const baseURL = 'https://us-central1-jejudo-drone-prototype.cloudfunctions.net/v1';
const instance: AxiosInstance = Axios.create({
    baseURL,
    timeout: 10000
})

export { baseURL, instance }