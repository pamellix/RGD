import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as Inter from "../../interfaces/Interfaces";
import {AppDispatch} from "../store";
import axios from "axios";
import app from "../../utils/AxiosConfig";

const initialState: Inter.DetailsTable[] = [
	{
		id: -1,
		detail: "",
		classificator: "",
		description: "",
	}
];

export const getDetails = createAsyncThunk<Inter.DetailsTable[], void , { rejectValue: string }>(
	"details/getDetails",
	async (data: void, {rejectWithValue}) => {
		try {
			const URL = `${process.env.REACT_APP_GET_ALL_DETAILS}`;
			const response = await app.get<Inter.DetailsTable[]>(URL);

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

const getDetailsSlice = createSlice({
	name: "getDetails",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDetails.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(getDetails.rejected, (state) => {
			return state;
		});
	},
});


export const fetchDetails = () => {
	return async (dispatch: AppDispatch) => {
		try {
			await dispatch(getDetails());
			// console.log(response);
		} catch (error) {
			console.error("Произошла ошибка", error);
		}
	};
};


export default getDetailsSlice.reducer;