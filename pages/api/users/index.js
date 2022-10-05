import { prisma } from "../prisma-client"
import { userService } from "../../../src/server/user/application/user-service"
import { prismaUserRepository } from "../../../src/server/user/infrastructure/prisma-user-repository"

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        return await createUser(req, res)
      case 'GET':
        return await getUsers(req, res)
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

const createUser = async (req, res) => {
  const {
    body: { email, name }
  } = req

  const userRepository = prismaUserRepository(prisma)
  const newUser = await userService(userRepository).createUser({ email, name })
  res.status(201).json({ data: newUser })
}

const getUsers = async (req, res) => {
  const userRepository = prismaUserRepository(prisma)
  const users = await userService(userRepository).searchUsersBy({ name: req.query.name })
  res.status(200).json({ data: users })
}

