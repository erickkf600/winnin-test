import React from 'react'
import ToggleButton from '../ToggleButton'

const HeaderView = ({ logout }: { logout: any }) => (
    <header className="header" data-testid="header">
        <div className="header__content">
            <ToggleButton />

            <h1
                data-testid="title"
                className="header__content-title"
                title="reactjs"
            >
                REACT<span>JS</span>
            </h1>

            <button
                className="header__content-logout icon-log-out"
                data-testid="logout"
                onClick={() => logout()}
            ></button>
        </div>
    </header>
)

export default HeaderView
