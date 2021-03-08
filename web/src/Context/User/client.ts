import axios from 'axios';
import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import { instance } from '../clientConfig'

const fetchAccountList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ accounts: IUser[] }>> => {
    return instance.get(`/accounts`, {
        params,
        cancelToken
    });
};
const postAccount = (payload: IUser, cancelToken: CancelToken = null) : 
Promise<AxiosResponse<{ result: string }>> => {
    return instance.post(`/accounts`, payload, {
        cancelToken
    });
};
const fetchAccount = (key: string, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ account: IUser }>> => {
    return instance.get(`/accounts/${key}`, {
        params,
        cancelToken
    });
}
const deleteAccount = (key: string, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{result: string}>> => {
    return instance.delete(`/accounts/${key}`, {
        cancelToken
    });
}

export { fetchAccountList, postAccount, fetchAccount, deleteAccount }