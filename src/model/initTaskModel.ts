
import ORM = require("sequelize");
import {Sequelize} from 'sequelize';

export function initTaskModel(sequelize:Sequelize) {
    return sequelize.define('task', {
        title: ORM.STRING,
        description: ORM.STRING,
        projectId: ORM.INTEGER
    },
    {
        tableName: 'task'
    });
}