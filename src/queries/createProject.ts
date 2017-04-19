
import { ProjectModel } from "../model/model";

export function createProject(props: any)
{
    return ProjectModel.create(props);
}
