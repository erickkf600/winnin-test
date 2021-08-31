import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
import { ApiResponse } from '../../interfaces/response.interface'
const axiosInstance = api(axiosRequestConfiguration)

export const getPosts = (
    url: string,
    queryParams?: object,
): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(url, { params: queryParams })
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
