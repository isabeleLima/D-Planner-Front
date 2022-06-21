import { Semester } from "../util/types"
import { api } from "./axios"
import StorageService from "./storage"

export interface CreateSemester {
  nome: string
  dataDeInicio: string
  dataDeFim: string
}

export default class SemesterService {
  static async findByUser() {
    const user = StorageService.getUser()
    const { data } = await api.get<Semester[]>(`/semesters/${user?.id}`)
    return data
  }

  static async create(semester: CreateSemester) {
    const user = StorageService.getUser()
    const { data } = await api.post(`/semesters/${user?.id}`, semester)
    return data
  }

  static async update(id: number, semester: CreateSemester) {
    const { data } = await api.put<Semester>(`/semesters/${id}`, semester)
    return data
  }

  static async delete(id: number) {
    const { data } = await api.delete<Semester>(`/semesters/${id}`)
    return data
  }
}
