import {Request, Response} from 'express';
import {onError} from "../onError";
import {onSuccess} from "../onSuccess";
import * as _ from 'lodash';
import {deleteProject as deleteProjectQuery} from "../../queries/deleteProject";


export function deleteProject(req:Request, res:Response) {

    const projectId = parseInt(req.params.id).toString();

    deleteProjectQuery(projectId)
        .then(_.partial(onSuccess, res))
        .catch( _.partial(onError, res, `Could not delete project ${projectId}`) );

}

