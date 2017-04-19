
import { TaskModel } from "../model/model";

export function createTask(projectId:number, props:any)
{
    props.projectId = projectId;
    return TaskModel.create(props);
}
