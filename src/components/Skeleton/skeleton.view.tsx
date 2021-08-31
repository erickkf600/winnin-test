import React from 'react'
import { Types } from '.'
import cx from 'classnames'

const SkeletonView = ({
    darkMode,
    type,
    styles,
}: {
    darkMode: boolean
    type: Types
    styles?: any
}) => {
    return (
        <div
            style={styles}
            data-testid="skeleton"
            className={cx({
                'dark-bg-clear skeleton--dark': darkMode,
                'skeleton skeleton--thumb': type === 'thumb',
                'skeleton skeleton--text': type === 'text',
            })}
        ></div>
    )
}

export default SkeletonView
