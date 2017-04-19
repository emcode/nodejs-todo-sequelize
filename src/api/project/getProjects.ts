
import {Request, Response} from 'express';
import * as _ from 'lodash';
import {findAllProjects as findAllProjectsQuery } from "../../queries/findAllProjects";
import {onError} from "../onError";
import {onSuccess} from "../onSuccess";


export function getProjects(req:Request, res:Response) {

    findAllProjectsQuery()
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find All Projects Failed"));
}

