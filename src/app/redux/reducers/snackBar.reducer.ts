import { createReducer, on } from '@ngrx/store';
import { showSnackBar } from '../actions/snackBar.actions';

export interface SnackState {
  showData
}

const initialState: SnackState = {
  showData: {}
}

const _snackReducer = createReducer(initialState,
  on(showSnackBar, (state, { showData }) => ({ ...state, showData: {...showData} }))
);

export function snackReducer(state, action) {
  return _snackReducer(state, action);
}