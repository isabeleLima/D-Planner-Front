export interface User {
  id: string
  nome: string
  username: string
  email: string
}

export interface Semester {
  id: number
  nome: string
  dataDeInicio: string
  dataDeFim: string
}

export interface Subjects {
  id: number
  nome: string
  professor: string
  semester: Semester
}

export interface Activity {
  id: number
  nome: string
  descricao: string
  subject: Subjects
  dataDeEntrega: string
  type: ActivityType
  status: string
}

export const ActivityType = {
  ACTIVITY: "ACTIVITY",
  PRESENTATION: "PRESENTATION",
  EVALUATION: "EVALUATION",
} as const

export type ActivityType = typeof ActivityType[keyof typeof ActivityType]
