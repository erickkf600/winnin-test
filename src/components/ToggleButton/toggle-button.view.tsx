import React from 'react'

interface ToggleButtonViewInterface {
    darkMode: boolean
    setDarkMode: any
}
const ToggleButtonView = ({
    darkMode,
    setDarkMode,
}: ToggleButtonViewInterface) => (
    <div
        data-testid="toggle-button"
        className={`${darkMode && 'dark-bg-medium'} toggle-button`}
    >
        <input
            type="checkbox"
            checked={darkMode}
            data-testid="toggle"
            onChange={() => setDarkMode()}
        />
        <button data-testid="button-check" className="button"></button>
    </div>
)

export default ToggleButtonView
