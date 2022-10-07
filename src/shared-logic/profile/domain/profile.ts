import { isUndefined } from "../../shared/utils/is-undefined"

interface ProfileProperties {
  id?: string
  jobTitle?: string
  skills?: string[]
  resume?: string
  hobbies?: Hobby[]
}

// @todo: Extract the Hobby logic to a separated entity
interface Hobby {
  name: string
  imageUrl?: string
  description?: string
}

export class Profile {
  public id: string
  public jobTitle: string
  public resume: string
  public skills: string[]
  public hobbies: Hobby[]

  constructor(properties: ProfileProperties) {
    !isUndefined(properties.id) && this.setId(properties.id)
    !isUndefined(properties.jobTitle) && this.setJobTitle(properties.jobTitle)
    !isUndefined(properties.skills) && this.setSkills(properties.skills)
    !isUndefined(properties.resume) && this.setResume(properties.resume)
    !isUndefined(properties.hobbies) && this.setHobbies(properties.hobbies)
  }

  setId(id: string) {
    this.id = id
  }

  setJobTitle(jobTitle: string) {
    if (jobTitle.length > 50)
      throw new Error("Domain: Job Title must be 50 length as maximum")

    this.jobTitle = jobTitle
  }

  setSkills(skills: string[]) {
    if (!skills.every(skill => !!skill))
      throw new Error("Domain: Some skill hasn't a value")

    this.skills = skills
  }

  setResume(resume: string) {
    if (resume.length > 200)
      throw new Error("Domain: Resume must be 200 length as maximum")

    this.resume = resume
  }

  setHobbies(hobbies: Hobby[]) {
    if (hobbies.every(hobby => !!hobby))
      throw new Error("Domain: Some hobby hasn't a value")

    this.hobbies = hobbies
  }
}
