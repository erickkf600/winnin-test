import React from 'react'
import cx from 'classnames'
const ComponentLoaderView = ({ darkMode }: any) => (
    <section
        data-testid="loading"
        className={cx({ 'dark-bg': darkMode }, 'loader')}
    >
        <div className="loader__animation" data-testid="spinner"></div>
    </section>
)

export default ComponentLoaderView
