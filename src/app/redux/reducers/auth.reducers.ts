import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/inferfaces/user';
import { setUser, unSetUser } from '../actions/auth.actions';

export interface userState {
    user: User
}

const initialState:userState = {
    user: JSON.parse(localStorage.getItem('user'))
}

const _authReducer = createReducer(initialState, 

    on(setUser, (state, { user }) => (
        { ...state, user: { ...user } }
    )),

    on(unSetUser, state => ({ ...state, user: null }))    
)

export function authReducer(state, action) {
    return _authReducer(state, action)
}
