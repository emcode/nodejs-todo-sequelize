import { Application } from "express";
import { list } from "./project/list";
import { view } from "./project/view";

export function initWebsite(app:Application) {

    app.route('/project/:id').get(view);
    app.route('/').get(list);

}