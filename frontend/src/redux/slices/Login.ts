import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as Inter from "../../interfaces/Interfaces";
import {AppDispatch} from "../store";
import axios from "axios";
import app from "../../utils/AxiosConfig";
import { error } from "console";

const initialState: Inter.Login = {
	login: "",
	password: "",
};

export const Login = createAsyncThunk<Inter.Login, string, { rejectValue: string }>(
	"auth/login",
	async (data: string, {rejectWithValue}) => {
		try {
			const URL = `${process.env.REACT_APP_GET_USER}${data}`;
			const response = await app.get<Inter.Login>(URL);

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

const getLogin = createSlice({
	name: "login",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(Login.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(Login.rejected, (state) => {
			return state;
		});
	},
});


export const fetchLogin = (data: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			return await dispatch(Login(data));
			// console.log(response);
		} catch (error) {
			console.error("Произошла ошибка", error);
		}
	};
};


export default getLogin.reducer;