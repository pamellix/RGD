import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as Inter from "../../interfaces/Interfaces";
import {AppDispatch} from "../store";
import axios from "axios";
import { appJSON } from "../../utils/AxiosConfig";

const initialState = {};

export const createUser = createAsyncThunk<void, Inter.CreateUser, { rejectValue: string }>(
	"user/createUser",
	async (data: Inter.CreateUser, {rejectWithValue}) => {
		try {
			const URL = `${process.env.REACT_APP_CREATE_USER}`;
			const response = await appJSON.post<void>(URL, data);

			if (response.status === 200) {
				alert("Удачно!");
			}
			return response.data;
		} catch
		(error: unknown) {
			if (error instanceof axios.AxiosError) {
				alert("Ошибка! Такой user уже существует");
				return rejectWithValue(error.message);
			}
			throw error;
		}
	}
);

const createUsersSlice = createSlice({
	name: "createUser",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createUser.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(createUser.rejected, (state) => {
			return state;
		});
	},
});


export const fetchCreateUser = (data: Inter.CreateUser) => {
	return async (dispatch: AppDispatch) => {
		try {
			await dispatch(createUser(data));
			// console.log(response);
		} catch (error) {
			console.error("Произошла ошибка", error);
		}
	};
};


export default createUsersSlice.reducer;