import {
  LocalPersistanceService
} from "../../../services/local-persistance-service";

export const update = ({
  id,
  name,
  email
}) => {
  return LocalPersistanceService.saveData("users", { name, email, id })
};
