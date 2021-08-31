export interface ApiResponse {
    kind: string
    data: ContentData
}
export interface ContentData {
    after: string
    children: ChildrenData[] | undefined
}
export interface ChildrenData {
    next?: string
    data: {
        thumbnail: string
        created: number
        subreddit_id: string
        id: string
        url: string
        author: string
    }
}
