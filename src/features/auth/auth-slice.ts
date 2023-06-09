import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "utils/createAppAsyncThunk";
import {ArgLoginType, ArgRegisterType, authApi, NewProfileType} from "features/auth/auth_api";


export const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register",
    async (arg: ArgRegisterType) => {
        const res = await authApi.register(arg)
    })

/*export const login = createAsyncThunk("auth/login", (arg: ArgLoginType, thunkAPI) => {
    const {dispatch} = thunkAPI
    authApi.login(arg).then((res) => {
        debugger
        dispatch(authActions.setProfile({profile: res.data}))
    })
})*/

export const login = createAppAsyncThunk<{ profile: NewProfileType }, ArgLoginType>("auth/login",
    async (arg) => {
        const res = await authApi.login(arg)
        return {profile: res.data}
    })

export const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as NewProfileType | null
    },
    reducers: {
        /*setProfile: (state, action: PayloadAction<{profile: NewProfileType}>) => {
            state.profile = action.payload.profile
        }*/
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.profile = action.payload.profile
        })
    }
})

export const authReducer = slice.reducer
//export const authActions = slice.actions
export const authThunks = {register, login}