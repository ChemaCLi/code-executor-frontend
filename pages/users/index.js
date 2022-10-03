import { ServiceLayerProvider } from "../../src/client/ui/contexts"
import { userService } from "../../src/client/src/user/application/user-service"
import { UsersManagementPageContent } from "../../src/client/ui/components/users"
import { restUserRepository } from "../../src/client/src/user/infrastructure/rest-user-repository"

export default function Users() {
  return (
    <ServiceLayerProvider
      services={{
        userService: userService(restUserRepository())
      }}>
      <UsersManagementPageContent />
    </ServiceLayerProvider>
  )
}
