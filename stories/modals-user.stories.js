import React  from "react"
import 'antd/dist/antd.css';
import { ServiceLayerProvider } from "../client/contexts"
import { UserModal } from "../client/components/users/user-modal"

export default {
  title: "Modals/User",
  component: UserModal
}

export const CreateUserMode = () => {
  const mockUserService = { getById: ({ id }) => ({ id }) }

  return (
    <ServiceLayerProvider
      services={{ userService: mockUserService }}>
      <UserModal visible />
    </ServiceLayerProvider>
  )
}

CreateUserMode.args = {
  onCreateUser: () => alert("Lets create the user"),
  afterSuccess: () => alert("The user has been created. Let's do something else")
}


export const EditUserMode = () => {
  const mockUserService = {
    getById: ({ id }) => ({
      id,
      name: "John Doe",
      email: "sample@email.com"
    })
  }

  return (
    <div>
      <ServiceLayerProvider
        services={{ userService: mockUserService }}>
        <UserModal visible selectedItem={{ id: "01" }} />
      </ServiceLayerProvider>
    </div>
  )
}
