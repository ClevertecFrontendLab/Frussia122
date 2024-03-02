import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from 'history';
import userReducer from './reducers/user';
import feedbacksReducer from './reducers/feedbacks';
import loaderReducer from './reducers/loader';
import recoverReducer from './reducers/recovery';

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ 
    history: createBrowserHistory(),
    savePreviousLocations: 1 
 });

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        user: userReducer,
        recover: recoverReducer,
        feedbacks: feedbacksReducer,
        loader: loaderReducer,
      }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);
export const locationSelector = (state: RootState) => state.router.location;
export const prevLocationSelector = (state: RootState) => state.router.previousLocations;
export const router = (state: RootState) => state.router.location;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
