
import {Request, Response} from 'express';
import * as _ from 'lodash';
import { onError } from "../onError";
import { ProjectDetail } from "../../model/projectDetail";
import { findProjectDetail as findProjectDetailQuery} from "../../queries/findProjectDetail";

export function view(req:Request, res:Response) {

    const projectId = parseInt(req.params.id);

    console.log('projectId', projectId);

    findProjectDetailQuery(projectId)
        .then(_.partial((res:Response, project:ProjectDetail) => {

            res.render('project/view', { project: project });

        }, res))
        .catch(_.partial(onError, res, "View project failed"));
}

