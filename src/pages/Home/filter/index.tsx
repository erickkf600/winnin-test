import React from 'react'
import cx from 'classnames'
import './filter.scss'

interface Filter {
    darkMode: boolean
    filterBy: string
    setFilter: any
}
const Filter = ({ darkMode, filterBy, setFilter }: Filter) => {
    return (
        <div className="filter" data-testid="filter">
            <button
                data-testid="filter-button"
                onClick={() => setFilter('hot')}
                className={cx({
                    active: filterBy == 'hot',
                    'dark-bg-clear': darkMode,
                })}
            >
                Hot
            </button>
            <button
                data-testid="filter-button"
                onClick={() => setFilter('new')}
                className={cx({
                    active: filterBy == 'new',
                    'dark-bg-clear': darkMode,
                })}
            >
                News
            </button>
            <button
                data-testid="filter-button"
                onClick={() => setFilter('rising')}
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

export default Filter
