import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {authReducer} from "features/auth/auth-slice";
import {appReduser} from "app/app-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        app: appReduser
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
