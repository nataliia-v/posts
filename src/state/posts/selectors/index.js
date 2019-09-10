import { createSelector } from 'reselect';

const getPostsModuleState = state => state.posts;

export const getAllPosts = createSelector(
    getPostsModuleState,
    postsState => postsState.data
);

export const getPostsIsLoading = createSelector(
    getPostsModuleState,
    postsState => postsState.loading
);

export const getPostsError = createSelector(
    getPostsModuleState,
    postsState => postsState.error
);

export const getIsSavingPost = createSelector(
    getPostsModuleState,
    postsState => postsState.isSaving
);