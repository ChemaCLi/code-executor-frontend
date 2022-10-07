import { isUndefined } from "../../shared/utils/is-undefined"

type MediaType = "IMAGE" | "VIDEO" | "NOT_SPECIFIED"

interface HobbyProperties {
  id?: string
  name?: string
  mediaUrl?: string
  mediaType?: MediaType
  description?: string
}

export class Hobby implements Required<HobbyProperties> {
  public id: string
  public name: string
  public mediaUrl: string
  public mediaType: MediaType
  public description: string

  constructor(properties: HobbyProperties) {
    !isUndefined(properties.id) && this.setId(properties.id)
    !isUndefined(properties.name) && this.setName(properties.name)
    !isUndefined(properties.mediaUrl) && this.setMediaUrl(properties.mediaUrl)
    !isUndefined(properties.mediaType) && this.setMediaType(properties.mediaType)
    !isUndefined(properties.description) && this.setDescription(properties.description)
  }

  setId(id: HobbyProperties["id"]) {
    this.id = id
  }

  setName(name: HobbyProperties["name"]) {
    this.name = name
  }

  setMediaUrl(mediaUrl: HobbyProperties["mediaUrl"]) {
    if (!mediaUrl.match(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/))
      throw new Error("Domain: The URL format is not valid")

    this.mediaUrl = mediaUrl
  }

  setMediaType(mediaType: HobbyProperties["mediaType"]) {
    if (!["IMAGE", "VIDEO"].includes(mediaType))
      throw new Error("Domain: the mediaType value is not supported")

    this.mediaType = mediaType
  }

  setDescription(description: HobbyProperties["description"]) {
    if (description.length > 300)
      throw new Error("Domain: The description must be 300 characters as maximum")

    this.description = description
  }
}
