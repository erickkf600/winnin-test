import React from 'react'
import { Filter } from './filter.interface'
import cx from 'classnames'

const Template: any = ({ filterBy, setFilterBy, darkMode }: Filter) => {
    return (
        <div className="filter">
            <button
                onClick={() => setFilterBy('hot')}
                className={cx({
                    active: filterBy == 'hot',
                    'dark-bg-clear': darkMode,
                })}
            >
                Hot
            </button>
            <button
                onClick={() => setFilterBy('news')}
                className={cx({
                    active: filterBy == 'news',
                    'dark-bg-clear': darkMode,
                })}
            >
                News
            </button>
            <button
                onClick={() => setFilterBy('rising')}
                className={cx({
                    active: filterBy == 'rising',
                    'dark-bg-clear': darkMode,
                })}
            >
                Rising
            </button>
        </div>
    )
}

export default Template
