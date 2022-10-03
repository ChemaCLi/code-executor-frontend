import {
  LocalPersistanceService
} from "../../../services/local-persistance-service";

export const getById = async ({ id }) => {
  return await LocalPersistanceService.getFullItemById("users", id)
};
