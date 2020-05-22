import { ActionReducerMap } from '@ngrx/store'
import { SnackState, snackReducer } from './reducers/snackBar.reducer'
import { userState, authReducer } from './reducers/auth.reducers'
import { postsReducer } from './reducers/posts.reducer'

export interface appState {
    snackBar: SnackState,
    user: userState,
    post
}

export const appReducers: ActionReducerMap<appState> = {
    snackBar: snackReducer,
    user: authReducer,
    post: postsReducer
}
