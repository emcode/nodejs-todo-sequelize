

import { ProjectModel, TaskModel } from "../model/model";
import * as Bluebird from "bluebird";
import { ProjectDetail } from "../model/projectDetail";
import { createProjectDetail } from "../model/createProjectDetail";

export function findProjectDetail(projectId:number): Bluebird<ProjectDetail> {

    console.log('findProjectDetail', projectId);
    return ProjectModel.findById(projectId, {
        include: [
            {
                model: TaskModel
            }
        ]
    })
    .then(createProjectDetail);
}