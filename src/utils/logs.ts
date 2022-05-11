import { v4 as uuid } from "uuid";
import { Log } from "../types";

export function createLog(name: string, type: string, value?: any): Log {
    return {
        id: uuid(),
        date: new Intl.DateTimeFormat('en-us', { dateStyle: 'medium', timeStyle: 'short'}).format(new Date()),
        event: {
            name,
            type,
            value
        }
    }
}