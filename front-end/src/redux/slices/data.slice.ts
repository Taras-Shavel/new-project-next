"use client"
import { INewData } from "../../interfaces/newData.interface";
import { dataService } from "../../services/data.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IDataState {
    data: INewData[];
   
}


const initialState: IDataState = {
    data: [],
};


interface IParams {
    page: number;
    limit: number;
}


export const getAll = createAsyncThunk<INewData[], IParams>(
    'dataSlice/getAll',
    async ({ page, limit }, thunkAPI) => {
        try {
            const { data } = await dataService.getAll(page, limit);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

const slice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.data = action.payload;
            })

    },
});

const {reducer: dataReducers, actions} = slice

const dataActions = {
    ...actions,
    getAll
}

export {
    dataActions,
    dataReducers
}
