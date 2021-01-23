import axios from 'axios';
import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
const baseURL = 'http://localhost:5000/jejudo-drone-prototype/us-central1/v1';
const instance: AxiosInstance = Axios.create({
    baseURL,
    timeout: 10000
})

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

export { Announcement, fetchAnnounceList, postAnnouncement, fetchAnnounceContent }