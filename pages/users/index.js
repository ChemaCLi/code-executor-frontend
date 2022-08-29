import { UserService } from "../../services"
import { ServiceLayerProvider } from "../../contexts";
import { UsersManagementPageContent } from "../../page-contents/users"

export default function Users() {
  return (
    <ServiceLayerProvider services={{ UserService }}>
      <UsersManagementPageContent />
    </ServiceLayerProvider>
  )
}