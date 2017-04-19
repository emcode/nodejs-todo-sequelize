
import { Request, Response } from 'express';
import  * as _ from 'lodash';
import { createTask as createTaskQuery } from "../../queries/createTask";
import { onError } from "../onError";
import { onSuccess } from "../onSuccess";
import { databaseErrorHandler } from "../databaseErrorHandler";

export function createTask(req:Request, res:Response) {

    createTaskQuery(parseInt(req.params.projectId), req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch( _.partial(onError, res, `Could not create task`) );

}






