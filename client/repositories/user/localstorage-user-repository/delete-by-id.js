import {
  LocalPersistanceService
} from "../../../services/local-persistance-service";

export const deleteById = async ({ id }) => {
  return await LocalPersistanceService.removeItemById("users", id)
};
