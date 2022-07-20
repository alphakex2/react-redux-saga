import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Action } from "../../constants"
import { RootState } from "../store/store"
import { AddressState, User } from "./../types"

const initialState: AddressState = {
  users: [],
}

export const getUsersRequest = createAction(Action.GET_USERS)
export const addUserRequest = createAction(Action.ADD_USER)
export const deleteUserRequest = createAction(Action.DELETE_USER)

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users = [...state.users, action.payload]
    },
  },
})

export const selectUsers = (state: RootState) => state.address.users

export const { getUsers, addUser } = addressSlice.actions

export default addressSlice.reducer
