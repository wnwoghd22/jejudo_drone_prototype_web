import axios from 'axios';
import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
const baseURL = 'http://localhost:5000/jejudo-drone-prototype/us-central1/v1';
const instance: AxiosInstance = Axios.create({
    baseURL,
    timeout: 10000
})

interface Announcement {
    name: string;
    date: Date;
    writer?: {
        id?: string
        name?: String
    };
    body: string;
}

const fetchAnnounceList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ AnnounceList: Announcement[] }>> => {
    return instance.get(`/announcements`, {
        params,
        cancelToken
    });
};

export { Announcement, fetchAnnounceList }