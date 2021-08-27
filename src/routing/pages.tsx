import { Routes } from '../interfaces/routes.interface'
import { Home } from './lazy-imports'

export const Pages: Routes[] = [
    {
        title: 'Home',
        route: '/home',
        component: Home,
    },
]
