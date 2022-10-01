import React, { useRef } from "react"
import 'antd/dist/antd.css';
import { ImperativeModal, ServiceLayerProvider } from "../client/contexts"
import { AddButton } from "../client/components/shared"
import { UserModal } from "../client/components/users/user-modal"

export default {
  title: "Modals/Imperative",
  component: UserModal
}

export const CreateMode = (args) => {
  const userModalRef = useRef(null)
  const mockUserService = { getById: ({ id }) => ({ id }) }

  return (
    <div>
      <ServiceLayerProvider
        services={{ userService: mockUserService }}>
        <ImperativeModal
          ref={userModalRef}
          modal={UserModal}
          modalProps={args} />
        <AddButton
          label="Agregar"
          onClick={() => userModalRef.current?.openModal()} />
      </ServiceLayerProvider>
    </div>
  )
}

CreateMode.args = {
  onCreateUser: () => alert("Lets create the user"),
  afterSuccess: () => alert("The user has been created. Let's do something else")
}


export const EditMode = () => {
  const userModalRef = useRef(null)
  const mockUserService = { getById: ({ id }) => ({ id, name: "John Doe", email: "sample@email.com" }) }

  return (
    <div>
      <ServiceLayerProvider
        services={{ userService: mockUserService }}>
        <ImperativeModal
          ref={userModalRef}
          modal={UserModal}
          modalProps={{
            onEditUser: newUserData => alert("Lets update the user data")
          }} />
        <AddButton
          label="Editar"
          onClick={() => userModalRef.current?.openModal({ id: "01" })} />
      </ServiceLayerProvider>
    </div>
  )
}
