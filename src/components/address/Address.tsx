import React, {  useEffect } from "react"
import { useAppDispatch } from "../../redux/hooks/hooks"
import { getUsersRequest } from "./../../redux/slices/addressSlice"
import List from "./../list/List"

interface AddressProps {}

const Address: React.FC<AddressProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUsersRequest())
  }, [dispatch])
  return (
    <div className="flex justify-center my-40">
      <List />
    </div>
  )
}

export default Address
