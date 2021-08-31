import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const postLogin = (
    url: string,
    data?: object,
): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .post(`https://reqres.in/api/${url}`, data)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
