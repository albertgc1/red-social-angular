import { createAction, props } from '@ngrx/store';

export const showSnackBar = createAction(
    '[Show SnackBar] Show',
    props<{showData}>()    
)
