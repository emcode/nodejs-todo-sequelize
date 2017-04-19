
import * as ORM from "sequelize";
import { Sequelize, LoggingOptions } from 'sequelize';
import { initProjectModel } from "./initProjectModel";
import { initTaskModel } from "./initTaskModel";

const dbUrl = 'mariadb://project_manager_user:project_manager_password@localhost:3306/project_manager';

const options: LoggingOptions = { benchmark: true, logging:console.log };

const sequelize:Sequelize = new ORM(dbUrl, options);

export const ProjectModel =  initProjectModel(sequelize);
export const TaskModel =  initTaskModel(sequelize);

ProjectModel.hasMany(TaskModel, { foreignKey: 'projectId' });
TaskModel.belongsTo(ProjectModel, { foreignKey: 'projectId' });