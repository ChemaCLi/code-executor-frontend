import { userService } from "../../services"
import { ServiceLayerProvider } from "../../contexts"
import { restUserRepository } from "../../repositories/user"
import { UsersManagementPageContent } from "../../page-contents/users"

export default function Users() {
  return (
    <ServiceLayerProvider
      services={{
        userService: userService(restUserRepository)
      }}>
      <UsersManagementPageContent />
    </ServiceLayerProvider>
  )
}