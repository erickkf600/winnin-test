import React from 'react'
import { useDarkMode } from '../../services/providers/Theme.provider'
import './skeleton.scss'
import SkeletonView from './skeleton.view'

export type Types = 'thumb' | 'text'
const Skeleton = ({ type, styles }: { type: Types; styles?: any }) => {
    const { darkMode }: any = useDarkMode()
    return <SkeletonView darkMode={darkMode} type={type} styles={styles} />
}

export default Skeleton
