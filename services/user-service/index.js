export const userService = (userRepository) => {
  const create = ({ name, email }) => {
    if (!name)
      throw new Error(`The name is required`)
    if (!email)
      throw new Error(`The email is required`)

    return userRepository.create({ name, email })
  }

  const update = ({ id, name, email }) => {
    if (!id) throw new Error("id is required")
    return userRepository.update({ id, name, email })
  }

  const getAll = () => {
    return userRepository.getAll()
  }

  const getById = async ({ id }) => {
    if (!id) throw new Error("ID is required")
    return userRepository.getById({ id })
  }

  const deleteById = async ({ id }) => {
    if (!id) throw new Error("ID is required")
    return userRepository.deleteById({ id })
  }

  return {
    create,
    update,
    getAll,
    getById,
    deleteById, 
  }
}
