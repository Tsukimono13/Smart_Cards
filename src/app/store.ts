import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {authReducer} from "features/auth/auth-slice";
import {appReducer} from "app/app-slice";
import {packsReducer} from "../features/packs/packs.slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        app: appReducer,
        packs: packsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
