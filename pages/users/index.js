import { userService } from "../../services"
import { ServiceLayerProvider } from "../../contexts"
import { localStorageUserRepository } from "../../repositories/user"
import { UsersManagementPageContent } from "../../page-contents/users"

export default function Users() {
  return (
    <ServiceLayerProvider
      services={{
        userService: userService(localStorageUserRepository)
      }}>
      <UsersManagementPageContent />
    </ServiceLayerProvider>
  )
}