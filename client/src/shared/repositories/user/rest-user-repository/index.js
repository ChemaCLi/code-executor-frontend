import { create } from "./create"
import { deleteById } from "./delete-by-id"
import { getAll } from "./get-all"
import { getById } from "./get-by-id"
import { update } from "./update"

export const restUserRepository = {
  create,
  deleteById,
  getAll,
  getById,
  update,
}
