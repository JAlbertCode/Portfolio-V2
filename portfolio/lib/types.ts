export interface Project {
  title: string
  description: string
  date: string
  image: string
  imageAlt: string
  link: string
  target?: '_self' | '_blank'
  skills: string[]
}
