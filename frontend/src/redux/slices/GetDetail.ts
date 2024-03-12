import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as Inter from "../../interfaces/Interfaces";
import {AppDispatch} from "../store";
import axios from "axios";
import app from "../../utils/AxiosConfig";

const initialState: Inter.DetailsTable = {
	id: -1,
	detail: "",
	classificator: "",
	description: "",
};

export const getDetail = createAsyncThunk<Inter.DetailsTable, string, { rejectValue: string }>(
	"details/getDetail",
	async (data: string, {rejectWithValue}) => {
		try {
			const URL = `${process.env.REACT_APP_GET_DETAIL}${data}`;
			const response = await app.get<Inter.DetailsTable>(URL);

			return response.data;
		} catch
		(error: unknown) {
			if (error instanceof axios.AxiosError) {
				return rejectWithValue(error.message);
			}
			throw error;
		}
	}
);

const getDetailSlice = createSlice({
	name: "getDetail",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDetail.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(getDetail.rejected, (state) => {
			return state;
		});
	},
});


export const fetchDetail = (data: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			await dispatch(getDetail(data));
			// console.log(response);
		} catch (error) {
			console.error("Произошла ошибка", error);
		}
	};
};


export default getDetailSlice.reducer;