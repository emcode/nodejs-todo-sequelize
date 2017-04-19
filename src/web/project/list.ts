
import {Request, Response} from 'express';
import * as _ from 'lodash';
import { findAllProjects as findAllProjectsQuery } from "../../queries/findAllProjects";
import { onError } from "../onError";
import {ProjectSummary} from "../../model/projectSummary";


export function list(req:Request, res:Response) {

    findAllProjectsQuery()
        .then(_.partial((res:Response, projects:ProjectSummary[]) => {

            res.render('project/list', { projects: projects });

        }, res))
        .catch(_.partial(onError, res, "Find All Projects Failed"));
}

