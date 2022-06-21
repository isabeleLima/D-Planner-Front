import { Subjects } from '../util/types'
import { api } from "./axios"
import StorageService from "./storage"

export interface CreateSubject {
    semester_id: number;
    name: string;
    professor: string;
    status: string;
}

export default class SubjectService {
    static async findBySemester_User_Id() {
        const user = StorageService.getUser()
        const { data } = await api.get<Subjects[]>(`/subject/findUserId/${user?.id}`)
        return data
    }

    static async create(cadeira: CreateSubject) {
        const { data } = await api.post(`/subject`, cadeira)
        return data
    }

    static async update(id: number, cadeira: CreateSubject) {
        const { data } = await api.put<Subjects>(`/subject/${id}`, cadeira)
        return data
    }
    
      static async delete(id: number) {
        const { data } = await api.delete<Subjects>(`/subject/${id}`)
        return data
    }
}