

import { ProjectModel } from "../model/model";
const hri = require('human-readable-ids').hri;

export function updateProject(id:string, props:any) {

    return ProjectModel.update(
        props,
        {
            where: { id }
        }
    );

}