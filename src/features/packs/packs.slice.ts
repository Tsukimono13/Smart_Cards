import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk, thunkTryCatch} from "../../common/utils";
import {packsApi} from "./packs.api";


const slice = createSlice({
    name: 'packs',
    initialState: {
        packs: {},
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPacks.fulfilled, (state, action) => {
                state.packs = action.payload.packs
            })
    }
})

export const fetchPacks = createAppAsyncThunk<{ packs: any }, void>
("packs/getting", async (arg: any, thunkAPI) => {
    return thunkTryCatch(
        thunkAPI,
        async () => {
            const res = await packsApi.getPacks()
            debugger
            return {packs: res.data}
        }
    )
})
export const packsReducer = slice.reducer