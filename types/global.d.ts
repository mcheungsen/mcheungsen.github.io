// types/global.d.ts
declare interface Technology {
    id: string
    name: string
    image: string
  }
  
declare interface Project {
    id: string
    name: string
    technologies: string[]
}