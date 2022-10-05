import { message, Modal } from "antd"

export const useUserActions = ({ userService }) => {
  const onCreateUser = async ({ name, email, onCompleted }) => {
    const dismissLoader = message.loading("Guardando...")
    try {
      const newUser = await userService.createUser({ name, email })
      message.success("Usuario guardado")
      onCompleted && await onCompleted(newUser)
      return newUser
    } catch(e) {
      console.error(e)
      message.error(e.message)
      throw e  // propagate the error to allow caller to handle the error
    } finally {
      dismissLoader()
    }
  }

  const onEditUser = async ({ id, name, email, onCompleted }) => {
    const dismissLoader = message.loading("Guardando...")
    try {
      const updatedUser = await userService.updateUser({ name, email, id })
      message.success("Usuario actualizado")
      onCompleted && await onCompleted(updatedUser)
      return updatedUser
    } catch(e) {
      console.error(e)
      message.error(e.message)
      throw e
    } finally {
      dismissLoader()
    }
  }

  const onDeleteUser = async ({ id, onCompleted }) => {
    Modal.confirm({
      okText: "Sí",
      cancelText: "No",
      title: "¿Estás seguro de eliminar este usuario?",
      onOk: async () => {
        try {
          await userService.deleteById({ id })
          message.success("Usuario eliminado")
          onCompleted && onCompleted()
        } catch(e) {
          console.error(e)
          message.error(e.message)
          throw e
        }
      }
    })
  }

  return {
    onEditUser,
    onCreateUser,
    onDeleteUser,
  }
}
