import axios from 'axios';
import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import { instance } from '../clientConfig'



const fetchNoticeList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ announcements: INotice[] }>> => {
    return instance.get(`/announcements`, {
        params,
        cancelToken
    });
};
const postNotice = (payload: INotice, cancelToken: CancelToken = null) : 
Promise<AxiosResponse<{ result: string }>> => {
    return instance.post(`./announcements`, payload, {
        cancelToken
    });
};
const fetchNotice = (key: string, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ content: INotice }>> => {
    return instance.get(`/announcements/${key}`, {
        params,
        cancelToken
    });
}
const deleteNotice = (key: string, cancelToken: CancelToken = null) :
Promise<null> => {
    return instance.delete(`/announcements/${key}`, {
        cancelToken
    });
}

export { fetchNoticeList, postNotice, fetchNotice, deleteNotice }