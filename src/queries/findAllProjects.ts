
import { ProjectModel } from "../model/model";
import { ProjectSummary, createProjectSummaries } from "../model/projectSummary";
import * as Bluebird from "bluebird";

export function findAllProjects() : Bluebird<ProjectSummary[]>  {
    return ProjectModel.findAll()
                       .then(createProjectSummaries)
}