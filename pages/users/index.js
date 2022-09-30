import { userService } from "../../infrastructure/client/services"
import { ServiceLayerProvider } from "../../infrastructure/client/contexts"
import { restUserRepository } from "../../infrastructure/client/repositories/user"
import { UsersManagementPageContent } from "../../infrastructure/client/components/users"

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
