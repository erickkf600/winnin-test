import React from 'react'
import Filter from './filter'
import cx from 'classnames'
import TimeStamp from '../../services/utils/TimeStamp'
import { Home } from './home.interface'

const Template: any = ({ darkMode, content }: Home) => (
    <section>
        <Filter darkMode={darkMode} />

        <ul className="posts">
            {content.map((item: any, i: number) => (
                <li className="posts__item" key={i}>
                    <div
                        className={cx(
                            { 'dark-bg-clear': darkMode },
                            'posts__item-rec',
                        )}
                    ></div>
                    <div
                        className={cx(
                            { 'dark-color': darkMode },
                            'posts__item-content',
                        )}
                    >
                        <p>{item?.data.title}</p>
                        <small className={cx({ 'dark-color-small': darkMode })}>
                            enviado há {TimeStamp(item?.data.created)} por
                            <span>{item?.data.author_name}</span>
                        </small>
                        <b>dominio.io</b>
                    </div>
                </li>
            ))}
        </ul>
    </section>
)

export default Template
