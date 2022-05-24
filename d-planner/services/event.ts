import { Events } from '../util/types';
import { supabase } from "./api";

export interface CreateEvent {
    subject_id: number;
    name: string;
    description: string;
    deadline: string;
    type: string;
}

export default class EventService {
    static async list() {
        const { data, error } = await supabase
            .from('events')
            .select()

        return data;
    }

    static async create({ subject_id, name, description, deadline, type }: CreateEvent) {
        const { data, error } = await supabase
            .from('events')
            .insert([
                { subject_id, name, description, deadline, type }
            ]);

        if (error) {
            return { error }
        }

        return data;
    }

    static async update({ id, subject_id, name, description, deadline, type }: Events) {
        const { data, error } = await supabase
            .from('events')
            .update({ subject_id, name, description, deadline, type })
            .match({ id })

        if (error) {
            return { error }
        }

        return data;
    }

    static async delete(id: number) {
        const { data, error } = await supabase
            .from('events')
            .delete()
            .match({ id })

        if (error) {
            return { error }
        }

        return data;
    }
}