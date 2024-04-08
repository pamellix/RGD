import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as Inter from "../../interfaces/Interfaces";
import {AppDispatch} from "../store";
import axios from "axios";
import { appJSON } from "../../utils/AxiosConfig";

const initialState = {};

export const createDetails = createAsyncThunk<void, Inter.CreateDetail, { rejectValue: string }>(
	"details/createDetail",
	async (data: Inter.CreateDetail, {rejectWithValue}) => {
		try {
			const URL = `${process.env.REACT_APP_CREATE_DETAIL}`;
			const response = await appJSON.post<void>(URL, data);

			return response.data;
		} catch
		(error: unknown) {
			if (error instanceof axios.AxiosError) {
				alert("Ошибка! Такой код уже существует");
				return rejectWithValue(error.message);
			}
			throw error;
		}
	}
);

const createDetailsSlice = createSlice({
	name: "createDetail",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createDetails.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(createDetails.rejected, (state) => {
			return state;
		});
	},
});


export const fetchCreateDetails = (data: Inter.CreateDetail) => {
	return async (dispatch: AppDispatch) => {
		try {
			await dispatch(createDetails(data));
			// console.log(response);
		} catch (error) {
			console.error("Произошла ошибка", error);
		}
	};
};


export default createDetailsSlice.reducer;