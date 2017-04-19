import { Request, Response } from 'express';
import { onError } from "../onError";
import { onSuccess } from "../onSuccess";
import * as _ from 'lodash';
import { deleteTask as deleteTaskQuery } from "../../queries/deleteTask";

export function deleteTask(req:Request, res:Response) {

    const taskId = parseInt(req.params.taskId).toString();

    deleteTaskQuery(taskId)
        .then(_.partial(onSuccess, res))
        .catch( _.partial(onError, res, `Could not delete task ${taskId}`) );

}

