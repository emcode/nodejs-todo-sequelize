
import { ProjectDetail } from "./projectDetail";

export function createProjectDetail({
    id,
    title,
    description,
    tasks}:any):ProjectDetail {
        return {
            id,
            title,
            description,
            tasks: tasks.map(createTaskFromDbModel)
        };
}

function createTaskFromDbModel({
    id,
    title,
    description,
    projectId
}:any) {
    return {
        id,
        title,
        description,
        projectId
    }
}












