import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import getDetailsReducer from "./slices/GetDetails";
import getDetailReducer from "./slices/GetDetail";
import createDetailReducer from "./slices/CreateDetail";
import loginReducer from "./slices/Login";
import createUserReducer from "./slices/SignUp";

const store = configureStore({
	reducer: {
		getDetails: getDetailsReducer,
		getDetail: getDetailReducer,
		createDetail: createDetailReducer,
		login: loginReducer,
		signup: createUserReducer
	}
});

// Типы для диспетчера и состояния
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// Hook, который предоставляет типизированный доступ к диспетчеру
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;