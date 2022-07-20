import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import addressReducer from "../slices/addressSlice"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "../sagas"

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    address: addressReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(saga),
})

saga.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
