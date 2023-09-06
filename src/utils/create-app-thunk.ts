import {AppDispatchType, configureStoreType} from "../store/store";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: configureStoreType;
    dispatch: AppDispatchType;
    rejectValue: null
}>();