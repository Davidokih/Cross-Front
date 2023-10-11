import { configureStore } from "@reduxjs/toolkit";
import reducer from "./GlobalState";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducers = persistReducer(persistConfig, reducer);

export const Store = configureStore({
	reducer: {
		reducers,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
			},
		}),
});