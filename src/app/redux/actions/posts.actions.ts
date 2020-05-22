import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/core/inferfaces/post';

export const setPosts = createAction(
    '[Posts] set posts',
    props<{ posts: Post }>()
)

export const unSetPosts = createAction('[Posts] unSet Posts')
