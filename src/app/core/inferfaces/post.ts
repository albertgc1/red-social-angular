export interface Post {
    id: number,
    descripction: string,
    photo?: string,
    created_at?: string,
    user?:{
        name: string,
        avatar: string
    },
    likes?: number,
    comments?: number
}
