import { combineReducers } from "@reduxjs/toolkit";
import { routerReducer } from './store';

export const rootReducer = combineReducers({
    router: routerReducer,
});


