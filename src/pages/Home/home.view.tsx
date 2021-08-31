import React from 'react'
import Skeleton from '../../components/Skeleton'
import TimeStamp from '../../services/utils/TimeStamp'
import { ChildrenData } from '../../interfaces/response.interface'
import Filter from './filter'
import cx from 'classnames'

interface Home {
    darkMode: boolean
    loading: boolean
    content: ChildrenData[]
    filterBy: string
    setNext: any
    setFilter: any
}
const HomeView = ({
    darkMode,
    loading,
    content,
    filterBy,
    setNext,
    setFilter,
}: Home) => {
    return (
        <section className="content" data-testid="content-wrapper">
            <Filter
                darkMode={darkMode}
                filterBy={filterBy}
                setFilter={setFilter}
            />

            <ul className="content__posts" data-testid="content-ul">
                {loading
                    ? [1, 2, 3, 4, 5].map((_, i) => (
                          <li
                              className="content__posts-item"
                              key={i}
                              data-testid="content-li"
                          >
                              <Skeleton type="thumb" />
                              <div className="content__posts-item-content">
                                  <Skeleton
                                      type="text"
                                      styles={{
                                          width: '300px',
                                          height: '20px',
                                      }}
                                  />
                                  <Skeleton type="text" />
                                  <Skeleton type="text" />
                              </div>
                          </li>
                      ))
                    : content.map((item: any, i: number) => (
                          <li
                              className="content__posts-item"
                              key={i}
                              data-testid="content-li"
                          >
                              <div
                                  className={cx(
                                      { 'dark-bg-clear': darkMode },
                                      'content__posts-item-rec',
                                  )}
                              ></div>
                              <div
                                  className={cx(
                                      { 'dark-color': darkMode },
                                      'content__posts-item-content',
                                  )}
                              >
                                  <p>{item?.data.title}</p>
                                  <small
                                      className={cx({
                                          'dark-color-small': darkMode,
                                      })}
                                  >
                                      enviado há {TimeStamp(item?.data.created)}{' '}
                                      por
                                      <a
                                          href={`https://www.reddit.com/user/${item?.data.author}`}
                                          target="_blank"
                                          rel="noreferrer"
                                      >
                                          {item?.data.author}
                                      </a>
                                  </small>
                                  <a
                                      className="content__posts-item-content-link"
                                      href=""
                                  >
                                      dominio
                                  </a>
                              </div>
                          </li>
                      ))}
            </ul>

            {!loading && (
                <button
                    data-testid="more-button"
                    onClick={e => setNext(e, content.pop()?.next)}
                    className="btn-loader btn"
                >
                    <span className="icon-plus"></span> Ver mais
                </button>
            )}
        </section>
    )
}

export default HomeView
