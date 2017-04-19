
import { TaskModel } from "../model/model";

export function deleteTask(id:string)
{
    return TaskModel.destroy({
        where: { 'id': id }
    });
}