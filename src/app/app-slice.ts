import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
            }
        }
    }
)

export const appReduser = slice.reducer
export const appActions = slice.actions