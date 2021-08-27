import React, { useState } from 'react'
import Template from './Template'
import './filter.scss'

const Filter = ({ darkMode }: { darkMode: boolean }) => {
    const [filterBy, setFilterBy] = useState<string>('hot')
    return (
        <Template
            filterBy={filterBy}
            darkMode={darkMode}
            setFilterBy={(e: string) => setFilterBy(e)}
        />
    )
}

export default Filter
