
import * as ORM from "sequelize";
import {Sequelize} from 'sequelize';

export function initProjectModel(sequelize: Sequelize)
{
    return sequelize.define('project', {
        title: ORM.STRING,
        description: ORM.STRING
    },
    {
        tableName: 'project'
    })
}
