import React from 'react'
import cx from 'classnames'
import imageHttp from './../../assets/imgs/error.svg'
import imageEmpty from './../../assets/imgs/empty.svg'
import { Types } from '.'
const ErrorMessageView = ({
    darkMode,
    type,
}: {
    darkMode: boolean
    type: Types
}) => (
    <section
        data-testid="error-section"
        className={cx({ 'dark-bg': darkMode }, 'error-message')}
    >
        <img
            src={type === 'http' ? imageHttp : imageEmpty}
            alt="oops"
            data-testid="error-img"
            className="error-message__image"
        />

        <div
            className={cx({ 'dark-color': darkMode }, 'error-message__texts')}
            data-testid="error-msg"
        >
            <h1>{type === 'http' ? 'OOPS' : 'VAZIO'}</h1>
            <p>
                {type === 'http'
                    ? 'Parece que ocorreu um erro ao carregar seus dados, tente novamente mais tarde.'
                    : 'Não encontramos nenhum conteúdo no moment, tente novamente mais tarde.'}
            </p>
        </div>
    </section>
)

export default ErrorMessageView
