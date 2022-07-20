export interface User {
  id: number | string
  firstName: string
  lastName: string
}

export interface AddressState {
  users: User[]
}
