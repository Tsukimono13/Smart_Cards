import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "utils/createAppAsyncThunk";
import {ArgLoginType, ArgRegisterType, authApi, ForgotPasswordType, NewProfileType} from "features/auth/auth.api";


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
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.profile = null
            })
    }
})

export const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register",
    async (arg: ArgRegisterType) => {
        const res = await authApi.register(arg)
    })

export const login = createAppAsyncThunk<{ profile: NewProfileType }, ArgLoginType>("auth/login",
    async (arg) => {
        const res = await authApi.login(arg)
        return {profile: res.data}
    })
export const authMe = createAppAsyncThunk<{ profile: NewProfileType }>("auth/login",
    async () => {
        const res = await authApi.me()
        return {profile: res.data}
    })

export const logOut = createAppAsyncThunk<void, void>("auth/logOut",
    async () => {
        const res = await authApi.logOut()
    })

export const forgotPassword = createAppAsyncThunk<any, ForgotPasswordType>("auth/forgot",
    async (arg) => {
        const res = await authApi.forgot(arg)
        return {}
    })


export const authReducer = slice.reducer
//export const authActions = slice.actions
export const authThunks = {register, login}