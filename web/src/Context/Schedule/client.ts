import { AxiosResponse, CancelToken } from 'axios';
import { instance } from '../clientConfig'

const postStudentToList = (date: string, part: string, payload: {key: string, name: string, }, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.post(`/schedule/${date}/${part}`, payload, {
        cancelToken
    });
};
const postScheduletoAccount = (key: string, payload: ISchedule, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.post(`/accounts/${key}/schedule`, payload, {
        params,
        cancelToken
    });
}

const fetchScheduleList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: ISchedule[] }>> => {
    return instance.get(`/schedule`, {
        params,
        cancelToken
    });
};
const fetchDayInfo = (date: string, params = {}, cancelToken = null) :
Promise<AxiosResponse<{ info : IDayInfo }>> => {
    return instance.get(`/schedule/${date}`, {
        params,
        cancelToken
    });
};
const fetchStudentsList = (date: string, part: string, params = {}, cancelToken = null) :
Promise<AxiosResponse<{ list: IUser[] }>> => {
    return instance.get(`/schedule/${date}/${part}`, {
        params,
        cancelToken
    });
};

const fetchSchedulefromAccount = (key: string, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: ISchedule[] }>> => {
    return instance.get(`/accounts/${key}/schedule`, {
        params,
        cancelToken
    });
}
const cancelScheduleOfAccount = (key: string, id: string, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.delete(`/accounts/${key}/schedule/${id}`, {
        cancelToken
    });
}
const deleteStudentOfSchedule = (date: string, part: string, key: string, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.delete(`schedule/${date}/${part}/${key}`, {
        cancelToken
    });
}


export { postScheduletoAccount, postStudentToList,
    fetchScheduleList, fetchDayInfo, fetchStudentsList, fetchSchedulefromAccount,
    cancelScheduleOfAccount, deleteStudentOfSchedule }