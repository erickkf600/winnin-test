import { defer, map, Observable } from 'rxjs'
import { api, axiosRequestConfiguration } from '../../api.axios'
import { ApiResponse } from './../../interfaces/response.interface'
const axiosInstance = api(axiosRequestConfiguration)

export const getPosts = (
    url: string,
    queryParams?: object,
): Observable<ApiResponse> => {
    return defer(() =>
        axiosInstance.get<ApiResponse>(url, { params: queryParams }),
    ).pipe(map(result => result.data))
}
