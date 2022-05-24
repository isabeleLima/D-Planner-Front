import { Subjects } from '../util/types';
import { supabase } from "./api";

export interface CreateSubject {
    semester_id: number;
    name: string;
    professor: string;
    status: string;
}

export default class SubjectService {
    static async list() {
        const { data, error } = await supabase
            .from('subjects')
            .select()

        return data;
    }

    static async create({ semester_id, name, professor, status }: CreateSubject) {
        const { data, error } = await supabase
            .from('subjects')
            .insert([
                { semester_id, name, professor, status }
            ]);

        if (error) {
            return { error }
        }

        return data;
    }

    static async update({ id, semester_id, name, professor, status }: Subjects) {
        const { data, error } = await supabase
            .from('subjects')
            .update({ semester_id, name, professor, status })
            .match({ id })

        if (error) {
            return { error }
        }

        return data;
    }

    static async delete(id: number) {
        const { data, error } = await supabase
            .from('subjects')
            .delete()
            .match({ id })

        if (error) {
            return { error }
        }

        return data;
    }
}