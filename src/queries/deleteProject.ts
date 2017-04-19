
import { ProjectModel } from "../model/model";

export function deleteProject(id:string)
{
    return ProjectModel.destroy({
        where: { 'id': id }
    });
}