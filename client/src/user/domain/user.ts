
interface UserProperties {
  id?: string
  name?: string
  email?: string
}

export class User {
  private _id?: string
  private _name?: string
  private _email?: string

  constructor(properties: UserProperties) {
    this.id = properties.id
    this.name = properties.name
    this.email = properties.email
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }

  get name () {
    return this._name
  }

  set name (name) {
    if (name.length < 4) throw new Error("Name must be larger than 3 characters")
    this._name = name
  }

  set email (email) {
    this._email = email
  }

  get email () {
    return this._email
  }
}
