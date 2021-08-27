export interface ApiResponse {
    kind: string
    data: Data
}
interface Data {
    children: ChildrenData[] | undefined
}
export interface ChildrenData {
    data: {
        thumbnail: string
        created: number
        subreddit_id: string
        id: string
        url: string
        author_name: string
    }
}
