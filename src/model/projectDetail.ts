

import {Task} from "./task";
import {ProjectSummary} from "./projectSummary";

export interface ProjectDetail extends ProjectSummary {
    description: string,
    title: string,
    tasks: Task[]
}

