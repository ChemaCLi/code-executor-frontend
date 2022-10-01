import { axiosConnector } from "../../../utils"

export const create = async ({
  name,
  email
}) => {
  const result = await axiosConnector.post("/users", { email, name })
  return result.data?.data
};

