import React, { useEffect, useState } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import { ChildrenData } from '../../interfaces/response.interface'
import * as response from '../../services/http/app.get'
import { useDarkMode } from '../../services/providers/Theme.provider'
import './home.scss'
import HomeView from './home.view'

const Home = () => {
    const [filterBy, setFilter] = useState<string>('hot')
    const [content, setContent] = useState<ChildrenData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [hasError, setError] = useState<boolean>(false)
    const { darkMode }: any = useDarkMode()

    useEffect(() => {
        getEngineers('', '')
    }, [filterBy])

    const getEngineers = async (e: any, next: string) => {
        setError(false)
        e?.target?.classList.add('btn-loader--start')
        await response
            .getPosts(`reactjs/${filterBy}.json`, { after: next, limit: 10 })
            .then((res: any) => {
                let data: ChildrenData[] = res.data.children as ChildrenData[]
                data.map((el: ChildrenData) => (el.next = res.data.after))
                setLoading(false)
                e?.target?.classList.remove('btn-loader--start')
                if (!!e) {
                    setContent([...content, ...data])
                } else {
                    setContent(data)
                }
            })
            .catch((err: any) => {
                console.error(err)
                setLoading(false)
                setError(true)
                e?.target?.classList.remove('btn-loader--start')
            })
    }

    return (
        <>
            {!content.length && !loading ? (
                hasError ? (
                    <ErrorMessage type="http" />
                ) : (
                    <ErrorMessage type="empty" />
                )
            ) : (
                <HomeView
                    darkMode={darkMode}
                    loading={loading}
                    content={content}
                    filterBy={filterBy}
                    setFilter={(e: string) => setFilter(e)}
                    setNext={(e: any, next: string) => getEngineers(e, next)}
                />
            )}
        </>
    )
}

export default Home
