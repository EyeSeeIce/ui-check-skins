import { configureStore } from '@reduxjs/toolkit'
import {skinService} from "./services/skin.service.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import routeModule from './modules/route.module.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        [skinService.reducerPath]: skinService.reducer,
        route: routeModule
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(skinService.middleware)
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export type AppDispatch = typeof store.dispatch