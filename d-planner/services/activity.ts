import { Activity, ActivityType } from "../util/types"
import { api } from "./axios"
import StorageService from "./storage"

interface CreateActivity {
  nome: string
  descricao: string
  subject: { id: number }
  dataDeEntrega: string
  type: ActivityType
  status: string
}

export default class ActivityService {
  static async findBySubject(id: number): Promise<Activity[]> {
    const { data } = await api.get<Activity[]>(`/activity/${id}`)
    return data
  }

  static async findByUser(): Promise<Activity[]> {
    const user = StorageService.getUser()
    const { data } = await api.get<Activity[]>(
      `/activity/listAllByUser/${user?.id}`
    )
    return data
  }

  static async findByType(type: ActivityType): Promise<Activity[]> {
    const user = StorageService.getUser()
    const { data } = await api.get<Activity[]>(
      `/activity/listByUserType/${user?.id}/${type}`
    )
    return data
  }

  static async create(activity: CreateActivity): Promise<Activity> {
    const { data } = await api.post<Activity>("/activity", activity)
    return data
  }

  static async update(id: number, activity: CreateActivity): Promise<Activity> {
    const { data } = await api.put<Activity>(`/activity/${id}`, activity)
    return data
  }

  static async close(activity: Activity): Promise<Activity> {
    const { data } = await api.put<Activity>("/activity/close", activity)
    return data
  }
}
