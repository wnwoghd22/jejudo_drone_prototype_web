import axios from 'axios';
import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import { instance } from '../clientConfig'

interface schedule {
    //id?: string;
    name?: string;
    date?: string;
    part?: string;
}

const fetchScheduleList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: schedule[] }>> => {
    return instance.get(`/schedule`, {
        params,
        cancelToken
    });
};
const postSchedule = (payload: schedule, cancelToken: CancelToken = null) : 
Promise<AxiosResponse<Account>> => {
    return instance.post(`/schedule`, payload, {
        cancelToken
    });
};
const fetchSchedule = (key: string, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: schedule[] }>> => {
    return instance.get(`/accounts/${key}/schedule`, {
        params,
        cancelToken
    });
}

export { schedule, fetchScheduleList, postSchedule, fetchSchedule }