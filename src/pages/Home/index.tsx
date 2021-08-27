import React, { useEffect, useState } from 'react'
import { take } from 'rxjs'
import { ApiResponse, ChildrenData } from '../../interfaces/response.interface'
import { useDarkMode } from '../../services/providers/Theme.provider'
import * as request from './../../services/requests/app.get'
import './home.scss'
import Template from './Template'

const Home = () => {
    const { darkMode }: any = useDarkMode()
    const [content, setContent] = useState<ChildrenData[]>([])
    useEffect(() => {
        getEngineers()
    }, [])
    const getEngineers = () => {
        request
            .getPosts('reactjs.json', {})
            .pipe(take(1))
            .subscribe((res: ApiResponse) => {
                let data: ChildrenData[] = res.data.children as ChildrenData[]
                setContent(data)
            })
    }
    console.log(content)
    return <Template darkMode={darkMode} content={content} />
}

export default Home
