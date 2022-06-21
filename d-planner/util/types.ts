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
  semester_id: number
  name: string
  professor: string
  status: string
}

export interface Events {
  id: number
  subject_id: number
  name: string
  description: string
  deadline: string
  type: string
}
