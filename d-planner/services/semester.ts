import { Semester } from '../util/types';
import { supabase } from "./api";

export interface CreateSemester {
    start: Date;
    end: Date;
    name: string;
}

export default class SemesterService {
    static async list() {
        const { data, error } = await supabase
            .from('semesters')
            .select()

        return data;
    }

    static async create({ start, end, name }: CreateSemester) {
        const { data, error } = await supabase
            .from('semesters')
            .insert([
                { start, end, name }
            ]);

        if (error) {
            return { error }
        }

        return data;
    }

    static async update({ id, start, end, name }: Semester) {
        const { data, error } = await supabase
            .from('semesters')
            .update({ start, end, name })
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