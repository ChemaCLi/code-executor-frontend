
import {
  LocalPersistanceService
} from "../../../services/local-persistance-service";

export const create = ({
  name,
  email
}) => {
  return LocalPersistanceService
    .createEntry("users", { name, email })
};

