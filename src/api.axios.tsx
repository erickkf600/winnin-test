import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'https://www.reddit.com/r/',
    headers: {},
    timeout: 10000,
}

export const api = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config)
    return axiosInstance
}
