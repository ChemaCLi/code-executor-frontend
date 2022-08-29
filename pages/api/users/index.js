import { prisma } from "../prisma-client"

export default async function handleer(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        return createUser(req, res)
      case 'GET':
        return getUsers(req, res)
      default:
        return res.status(405).json({ error: "Method not allowed in this path" })
    }
  } catch (e) {
    res.status(500).json({ error: e?.message || e })
  } finally {
    prisma.$disconnect()
  }
}

const getUsers = async (req, res) => {
  const users = await prisma.user.findMany()
  res.status(200).json({ data: users })
  return users
}

const createUser = async (req, res) => {
  const {
    body: { email, name },
  } = req

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    }
  })
  res.status(201).json({ data: newUser })
  return newUser
}
