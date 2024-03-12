import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import getDetailsReducer from "./slices/GetDetails";
import getDetailReducer from "./slices/GetDetail";
import createDetailReducer from "./slices/CreateDetail";

const store = configureStore({
	reducer: {
		getDetails: getDetailsReducer,
		getDetail: getDetailReducer,
		createDetail: createDetailReducer
	}
});

// Типы для диспетчера и состояния
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// Hook, который предоставляет типизированный доступ к диспетчеру
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;