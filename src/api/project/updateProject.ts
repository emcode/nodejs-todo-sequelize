

import {Request, Response} from 'express';
import * as _ from 'lodash';
import {updateProject as updateProjectQuery } from "../../queries/updateProject";
import {onError} from "../onError";
import {onSuccess} from "../onSuccess";
import {databaseErrorHandler} from "../databaseErrorHandler";

export function updateProject(req:Request, res:Response) {

    const projectId = req.params.id;

    updateProjectQuery(projectId, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch( _.partial(onError, res, "Could not update project") );

}