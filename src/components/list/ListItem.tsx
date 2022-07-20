import React from "react"
import { deleteUserRequest } from "../../redux/slices/addressSlice"
import { User } from "../../redux/types"
import { useAppDispatch } from "./../../redux/hooks/hooks"

interface ListItemProps {
  user: User
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  const dispatch = useAppDispatch()
  const { firstName, lastName } = user

  const deleteUser = (id: string | number) => {
    dispatch(deleteUserRequest())
  }
  
  return (
    <div className="grid grid-cols-3 bg-slate-800 text-white p-6 rounded-md mb-1">
      <div className="flex">
        <div className="p-2 font-bold">First Name</div>
        <div className="p-2">{firstName}</div>
      </div>
      <div className="flex ">
        <div className="p-2 font-bold">Last Name</div>
        <div className="p-2">{lastName}</div>
      </div>
      <button
        onClick={() => deleteUser(user.id)}
        className="p-2 border border-red-600  text-red-600 hover:bg-red-600 hover:text-white rounded-md hover:opacity-80 ml-4"
      >
        Delete
      </button>
    </div>
  )
}

export default ListItem
