import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from 'history';
import userReducer from './reducers/user';
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
      }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
