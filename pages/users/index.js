import { userService } from "../../client/services"
import { ServiceLayerProvider } from "../../client/contexts"
import { restUserRepository } from "../../client/repositories/user"
import { UsersManagementPageContent } from "../../client/components/users"

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
