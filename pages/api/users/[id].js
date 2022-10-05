import { prisma } from "../prisma-client"
import { userService } from "../../../src/server/user/application/user-service";
import { prismaUserRepository } from "../../../src/server/user/infrastructure/prisma-user-repository";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        return await getSingleUser(req, res)
      case 'PATCH':
        return await updateUser(req, res)
      case 'DELETE':
        return await deleteUser(req, res)
      default:
        return res.status(405).json({ error: "Method not allowed in this path" })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e?.message || e })
  } finally {
    prisma.$disconnect()
  }
}

const getSingleUser = async (req, res) => {
  const { query: { id } } = req
  const userRepository = prismaUserRepository(prisma)
  const user = await userService(userRepository).findUser({ id: Number(id) })
  res.status(200).json({ data: user })
}

const updateUser = async (req, res) => {
  const {
    body: { name },
    query: { id }
  } = req

  const userRepository = prismaUserRepository(prisma)
  const updatedUser = await userRepository.updateUser({ id: Number(id), name })
  res.status(202).json({ data: updatedUser })
}

const deleteUser = async (req, res) => {
  const {
    query: { id },
  } = req

  const userRepository = prismaUserRepository(prisma)
  const deletedUser = await userRepository.deleteUser({ id: Number(id) })

  res.status(202).json({ data: deletedUser })
  return deletedUser
}
