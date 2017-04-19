

import * as express from 'express';
import { Application } from "express";
import { initRestApi } from "./api/api";
import { initWebsite } from "./web/web";
import { apiErrorHandler } from "./api/apiErrorHandler";
const hbs = require('hbs');
const fs = require('fs');
const bodyParser = require('body-parser');

const app:Application = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('addOne', function(value:number) {
    return value + 1;
});

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

initRestApi(app);
initWebsite(app);

app.use(apiErrorHandler);

app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});








