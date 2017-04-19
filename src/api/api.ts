
import { Application } from "express";
import { getProjects } from "./project/getProjects";
import { createProject } from "./project/createProject";
import { createTask } from "./task/createTask";
import { updateProject } from "./project/updateProject";
import { deleteProject } from "./project/deleteProject";
import { getProjectDetail } from "./project/getProjectDetail";
import { deleteTask } from "./task/deleteTask";

export function initRestApi(app:Application) {

    app.route('/api/project').get(getProjects);
    app.route('/api/project').post(createProject);
    app.route('/api/project/:id').get(getProjectDetail);
    app.route('/api/project/:id').patch(updateProject);
    app.route('/api/project/:id').delete(deleteProject);

    app.route('/api/project/:projectId/task').post(createTask);
    app.route('/api/project/:projectId/task/:taskId').delete(deleteTask);
}