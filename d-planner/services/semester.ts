import { Semester } from "../util/types"
import { api } from "./axios"
import StorageService from "./storage"

export interface CreateSemester {
  nome: string
  dataDeInicio: Date
  dataDeFim: Date
}

export default class SemesterService {
  static async findByUser() {
    const user = StorageService.getUser()
    const { data } = await api.get<Semester[]>(`/semesters/${user?.id}`)
    return data
  }

  static async create(semester: CreateSemester) {
    const user = StorageService.getUser()

    const { data } = await api.post("/semesters", {
      ...semester,
      userId: user?.id,
    })
    return data
  }

  static async update(id: number, semester: Semester) {
    const { data } = await api.put<Semester>(`/semesters/${id}`)
    return data
  }

  static async delete(id: number) {
    const { data } = await api.delete<Semester>(`/semesters/${id}`)
    return data
  }
}
