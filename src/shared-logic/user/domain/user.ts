import { Profile } from "../../profile/domain/profile"
import { isUndefined } from "../../shared/utils/is-undefined"

interface UserProperties {
  id?: string
  name?: string
  email?: string
  profile?: Profile
}

export class User implements UserProperties {
  public id: string
  public name: string
  public email: string
  public profile: Profile

  constructor(properties: UserProperties) {
    !isUndefined(properties.id) && this.setId(properties.id)
    !isUndefined(properties.name) && this.setName(properties.name)
    !isUndefined(properties.email) && this.setEmail(properties.email)
    !isUndefined(properties.profile) && this.setProfile(properties.profile)
  }

  setId(id: string) {
    this.id = id
  }

  setName(name: string) {
    if (name.length < 4) throw new Error("Domain: Name must be larger than 3 characters")
    this.name = name
  }

  setEmail(email: string) {
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) throw new Error("Domain: wrong email format")
    this.email = email
  }

  setProfile(profile: Profile) {
    if (!(profile instanceof Profile) && (typeof profile !== "object"))
      throw new Error("Domain: profile must be an instance of Profile or an object with the right contract implementation")

    this.profile = (profile instanceof Profile) ? profile : new Profile(profile)
  }
}
