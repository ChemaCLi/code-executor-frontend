
interface UserProperties {
  id?: number
  name?: string
  email?: string
}

export class User {
  public id: number
  public name: string
  public email: string

  constructor(properties: UserProperties) {
    this.setId(properties.id)
    this.setName(properties.name)
    this.setEmail(properties.email)
  }

  setId (id) {
    this.id = id
  }

  setName (name) {
    if (name.length < 4) throw new Error("Domain: Name must be larger than 3 characters")
    this.name = name
  }

  setEmail (email) {
    this.email = email
  }
}
