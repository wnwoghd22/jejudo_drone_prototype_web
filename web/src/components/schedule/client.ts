import axios from 'axios';
import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import { instance } from '../clientConfig'

interface schedule {
    id?: string;
    name?: string;
    date?: string;
    part?: string;
}
interface student {
    name?: string;
}

const postSchedule = (payload: schedule, cancelToken: CancelToken = null) : 
Promise<AxiosResponse<schedule>> => {
    return instance.post(`/schedule`, payload, {
        cancelToken
    });
};
const postStudentToList = (date: string, part: string, payload: schedule, cancelToken = null) :
Promise<AxiosResponse<schedule>> => {
    return instance.post(`/schedule/${date}/${part}`, payload, {
        cancelToken
    });
};
const postScheduletoAccount = (key: string, payload: schedule, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: schedule }>> => {
    return instance.post(`/accounts/${key}/schedule`, payload, {
        cancelToken
    });
}

const fetchScheduleList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: schedule[] }>> => {
    return instance.get(`/schedule`, {
        params,
        cancelToken
    });
};
const fetchStudentsList = (date: string, part: string, params = {}, cancelToken = null) :
Promise<AxiosResponse<{ list: student[] }>> => {
    return instance.get(`/schedule/${date}/${part}`, {
        params,
        cancelToken
    });
};
const fetchSchedulefromAccount = (key: string, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: schedule[] }>> => {
    return instance.get(`/accounts/${key}/schedule`, {
        params,
        cancelToken
    });
}

export { schedule, student, postScheduletoAccount, postStudentToList, fetchScheduleList, fetchSchedulefromAccount }