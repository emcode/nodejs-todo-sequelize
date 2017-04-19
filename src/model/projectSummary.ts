

export interface ProjectSummary {
    readonly id:number,
    readonly title: string,
    description: string
}

export function createProjectSummary({
    id,
    title,
    description}:any): ProjectSummary {

    return {
        id, title, description
    };
}

export function createProjectSummaries(data: any[]): ProjectSummary[]
{
    return data.map(createProjectSummary);
}


