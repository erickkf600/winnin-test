import React from 'react'

const Template = ({ toggle, darkMode, setDarkMode }: any) => (
    <div className={`${darkMode && 'dark-bg-medium'} toggle-button`}>
        <input
            type="checkbox"
            checked={darkMode}
            ref={toggle}
            onChange={() => setDarkMode(!darkMode)}
        />
        <button
            className="button"
            onClick={() => toggle.current.click()}
        ></button>
    </div>
)

export default Template
