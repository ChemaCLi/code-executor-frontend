import { prisma } from "../prisma-client"

export default async function handleer(req, res) {
  if (req.method === 'POST') {
    createUser(req, res)
  }

  if (req.method === 'GET') {
    getUsers(req, res)
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json({ data: users })
    return users
  } catch (e) {
    res.status(500).json({ error: e?.message || e })
  } finally {
    prisma.$disconnect()
  }
}

const createUser = async (req, res) => {
  const {
    body: { email, name },
  } = req

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      }
    })
    res.status(201).json({ data: newUser })
    return newUser
  } catch (e) {
    res.status(500).json({ error: e?.message || e })
  } finally {
    prisma.$disconnect()
  }
}


