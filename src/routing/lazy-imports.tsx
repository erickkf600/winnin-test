import React, { Suspense, lazy } from 'react'
import ComponentLoader from '../components/ComponentLoader'

export default function LazyLoad(component: any) {
    const ComponentLoaded = lazy(component)
    return (props: any) => (
        <Suspense fallback={<ComponentLoader />}>
            <ComponentLoaded {...props} />
        </Suspense>
    )
}

//PRIVATE
export const Home = LazyLoad(
    () => import('../pages/Home' /* webpackChunkName: 'home' */),
)

//PUBLIC
export const Login = LazyLoad(
    () => import('../pages/Login' /* webpackChunkName: 'login' */),
)
