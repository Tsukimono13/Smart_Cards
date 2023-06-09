import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError, isAxiosError} from "axios";
import {authThunks} from "features/auth/auth-slice";

const appInitialState = {
    isLoading: false,
    isInitialized: false,
    users: [],
    error: null as string | null
}
type InitialStateType = typeof appInitialState

const slice = createSlice({
        name: "app",
        initialState: appInitialState,
        reducers: {
            setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
                state.isLoading = action.payload.isLoading
            },
            setError: (state, action: PayloadAction<{ error: string | null }>) => {
                state.error = action.payload.error
            },
            setInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
                state.isInitialized = action.payload.isInitialized
            }
        },
        extraReducers: (builder) => {
            builder.addMatcher((action) => action.type.endsWith('/pending'),
                (state, action) => {
                    state.isLoading = true
                })
                .addMatcher((action) => action.type.endsWith('/fulfilled'),
                    (state, action) => {
                        state.isLoading = false
                    })
                .addMatcher(
                    (action) => action.type.endsWith("/rejected"),
                    (state, action) => {
                        state.isLoading = false;
                        if (!action.payload.showGlobalError) return;
                        const err = action.payload.e as Error | AxiosError<{ error: string }>;
                        if (isAxiosError(err)) {
                            state.error = err.response ? err.response.data.error : err.message;
                        } else {
                            state.error = `Native error ${err.message}`;
                        }
                    }
                )
        }
    }
)

export const appReducer = slice.reducer
export const appActions = slice.actions