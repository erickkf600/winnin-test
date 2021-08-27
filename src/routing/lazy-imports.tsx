import React, { Suspense, lazy } from 'react'

export default function LazyLoad(component: any) {
    const ComponentLoaded = lazy(component)
    return (props: any) => (
        <Suspense fallback={<p>...Loading</p>}>
            <ComponentLoaded {...props} />
        </Suspense>
    )
}

export const Home = LazyLoad(
    () => import('../pages/Home' /* webpackChunkName: 'home' */),
)
