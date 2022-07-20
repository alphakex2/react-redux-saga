import axios from "axios"
import { User } from "./../redux/types"

export const getUsersApi = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  })
}

export const createUserApi = ({ firstName, lastName}: User) => {
  return axios.post("/users", {
    firstName,
    lastName,
  })
}

export const deleteUserApi = (id: number | string) => {
  console.log(id);
  
  return axios.delete(`/users/${id}`);
}
