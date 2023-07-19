import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {ArgLoginType, ArgRegisterType, authApi, ForgotPasswordType, NewProfileType} from "features/auth/auth.api";
import {thunkTryCatch} from "common/utils";


const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as NewProfileType | null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(isInitialized.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.profile = null
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {

            })

    }
})

export const register = createAppAsyncThunk<void, ArgRegisterType>
("auth/register", async (arg: ArgRegisterType, thunkAPI) => {
    return thunkTryCatch(
        thunkAPI,
        async () => {
            await authApi.register(arg)
        })
})

export const login = createAppAsyncThunk<{ profile: NewProfileType }, ArgLoginType>
("auth/login", async (arg, thunkAPI) => {
    return thunkTryCatch(
        thunkAPI,
        async () => {
            const res = await authApi.login(arg)
            return {profile: res.data}
        },
        true
    )
})
export const isInitialized = createAppAsyncThunk<{ profile: NewProfileType }>
("auth/authMe", async (arg, thunkAPI) => {
    return thunkTryCatch(
        thunkAPI,
        async () => {
            const res = await authApi.me()
            return {profile: res.data}
        }
    )
})

export const logOut = createAppAsyncThunk<void, void>
("auth/logOut", async (arg, thunkAPI) => {
    return thunkTryCatch(
        thunkAPI,
        async () => {
            const res = await authApi.logOut()
        }
    )
})


export const forgotPassword = createAppAsyncThunk<any, ForgotPasswordType>("auth/forgot",
    async (arg) => {

        const res = await authApi.forgot(arg)

        console.log(res)
    })


export const authReducer = slice.reducer
//export const authActions = slice.actions
export const authThunks = {register, login, logOut, isInitialized, forgotPassword}