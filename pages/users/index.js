import { ServiceLayerProvider } from "../../client/ui/contexts"
import { UsersManagementPageContent } from "../../client/ui/components/users"
import { userService } from "../../client/src/user/application/user-service"
import { restUserRepository } from "../../client/src/user/infrastructure/rest-user-repository"

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
