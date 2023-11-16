import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse {
    slip: {
        id: number;
        advice: string;
    }
}

const axiosInstance = axios.create({
    baseURL: 'https://api.adviceslip.com',
});

class APIClient {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAdvice = () => {
        return axiosInstance
        .get<FetchResponse>(this.endpoint)
        .then(res => res.data)
    };

};

export default APIClient;