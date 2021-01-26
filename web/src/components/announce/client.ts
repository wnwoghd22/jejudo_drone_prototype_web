import axios from 'axios';
import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import { instance } from '../clientConfig'

interface Announcement {
    id?: string;
    title?: string;
    date?: Date;
    writer?: {
        id?: string
        name?: String
    };
    body?: string;
}

const fetchAnnounceList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ announcements: Announcement[] }>> => {
    return instance.get(`/announcements`, {
        params,
        cancelToken
    });
};
const postAnnouncement = (payload: Announcement, cancelToken: CancelToken = null) : 
Promise<AxiosResponse<Announcement>> => {
    return instance.post(`./announcements`, payload, {
        cancelToken
    });
};
const fetchAnnounceContent = (key: string, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ content: Announcement }>> => {
    return instance.get(`/announcements/${key}`, {
        params,
        cancelToken
    });
}
const deleteAnnouncement = (key: string, cancelToken: CancelToken = null) :
Promise<null> => {
    return instance.delete(`/announcements/${key}`, {
        cancelToken
    });
}

export { Announcement, fetchAnnounceList, postAnnouncement, fetchAnnounceContent, deleteAnnouncement }