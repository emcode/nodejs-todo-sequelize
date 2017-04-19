
import { Request, Response } from 'express';
import { onSuccess } from "../onSuccess";
import { onError } from "../onError";
import { findProjectDetail as findProjectDetailQuery } from "../../queries/findProjectDetail";
import * as _ from 'lodash';

export function getProjectDetail(req:Request, res:Response) {

    const projectId = parseInt(req.params.id);

    findProjectDetailQuery(projectId)
        .then(_.partial(onSuccess, res))
        .catch( _.partial(onError, res, `Could not find project detail for id ${projectId}`) );

}