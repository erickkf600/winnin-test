/* eslint-disable no-unused-vars */
import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Home from '.'
import { ChildrenData } from '../../interfaces/response.interface'
import HomeView from './home.view'

import * as response from '../../services/http/app.get'
const mockResponse: any = {
    data: {
        kind: 'Listing',
        data: {
            after: 't3_peo40k',
            children: [
                {
                    data: {
                        thumbnail:
                            'https://b.thumbs.redditmedia.com/TjtfnamAqxKc3XuRKDXWunLuCsEOf9uKZxzxn-d-oZc.jpg',
                        created: 1627802896.0,
                        subreddit_id: 't5_2zldd',
                        id: 'ovnu99',
                        url: 'https://www.reddit.com/r/reactjs/comments/ovnu99/beginners_thread_easy_questions_august_2021/',
                        author: 'TechbaseDevv',
                    },
                },
            ],
        },
    },
}
const contentMock: ChildrenData[] = [
    {
        next: 't3_pd2q86',
        data: {
            thumbnail: '',
            created: 1629150431.0,
            subreddit_id: 't5_2zldd',
            id: 'p5pypn',
            url: '',
            author: 't2_6gjgi',
        },
    },
]

describe('HomeComponent', () => {
    it('should create', () => {
        expect(render(<Home />)).toBeTruthy()
    })

    it('should has class content', () => {
        render(
            <HomeView
                darkMode={false}
                loading={false}
                filterBy={'hot'}
                setFilter={jest.fn()}
                setNext={jest.fn()}
                content={contentMock}
            />,
        )
        const element = screen.getByTestId('content-wrapper')
        expect(element).toHaveClass('content')
    })

    it('should has class content__posts', () => {
        render(
            <HomeView
                darkMode={false}
                loading={true}
                filterBy={'new'}
                setFilter={jest.fn()}
                setNext={jest.fn()}
                content={contentMock}
            />,
        )
        const element = screen.getByTestId('content-ul')
        expect(element).toHaveClass('content__posts')
    })

    it('should has class content__posts-item', () => {
        render(
            <HomeView
                darkMode={false}
                loading={true}
                filterBy={'new'}
                setFilter={jest.fn()}
                setNext={jest.fn()}
                content={contentMock}
            />,
        )
        const element = screen.getAllByTestId('content-li')
        expect(element[0]).toHaveClass('content__posts-item')
    })

    it('should cover show more button', () => {
        render(
            <HomeView
                darkMode={false}
                loading={false}
                filterBy={'new'}
                setFilter={jest.fn()}
                setNext={jest.fn()}
                content={contentMock}
            />,
        )
        const button = screen.getByTestId('more-button')
        button.click()
        expect(button).toHaveClass('btn-loader btn')
    })
})
