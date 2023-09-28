import {Task} from "entity/Tasks/model/types/task";

export interface Project {
    id: number;
    title: string;
    createdAt: string;
    tasks?: Task[];
}
