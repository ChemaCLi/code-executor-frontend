import {
  LocalPersistanceService
} from "../../../services/local-persistance-service";


export const getAll = () => {
  return LocalPersistanceService.getData("users")
};
