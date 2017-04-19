
import {Request, Response} from 'express';
import  * as _ from 'lodash';
import {createProject as createProjectQuery} from "../../queries/createProject";
import {onError} from "../onError";
import {onSuccess} from "../onSuccess";
import {databaseErrorHandler} from "../databaseErrorHandler";

export function createProject(req:Request, res:Response) {

    console.log('req.body', req.body);

    createProjectQuery(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch( _.partial(onError, res, `Could not create lesson`) );

}






