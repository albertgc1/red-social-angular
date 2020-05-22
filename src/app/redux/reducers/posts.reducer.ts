import { createReducer, on } from "@ngrx/store"
import { setPosts, unSetPosts } from '../actions/posts.actions'
import { Post } from 'src/app/core/inferfaces/post'

const initialState : Post[] = [
    {
        descripction: 'post 1',
        id: 1
    },
    {
        descripction: 'post 1',
        id: 1
    }
]

const _postsReducer = createReducer(initialState, 
    on(setPosts, (state, posts) => [ ...state, posts.posts ]),
    on(unSetPosts, state => [] )
)

export function postsReducer(state, action){
    return _postsReducer(state, action)
}
