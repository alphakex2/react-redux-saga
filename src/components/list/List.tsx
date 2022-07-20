import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import { useAppSelector } from "../../redux/hooks/hooks"
import { selectUsers } from "../../redux/slices/addressSlice"
import ListItem from "./ListItem"

interface ListProps {}

const List: React.FC<ListProps> = () => {
  const users = useAppSelector(selectUsers)
  const [pageNo, setPageNo] = useState(1)

  const usersPerPage = 5
  const pagesVisited = pageNo * usersPerPage

  const displayUsers = users
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => <ListItem key={user.id} user={user} />)

  const pageCount = Math.ceil(users?.length / usersPerPage)

  const changePage = ({ selected }: any) => {
    setPageNo(selected)
  }

  return (
    <div>
      <div className="mb-6 text-4xl font-bold text-center">Users List</div>
      {displayUsers}
      <ReactPaginate
        previousLabel={"< Prev "}
        nextLabel={" Next >"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtnsContainer"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageClassName={"pageNoBtn"}
      />
    </div>
  )
}
export default List
