const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const routes = require('./api/routes/generalRoutes');
const General = require('./api/models/generalModel');

const port = 4000;
const app = new Koa();
const router = Router();

mongoose.connect('mongodb://localhost/generalsDB');

app.use(bodyParser());
// app.use(respond());

// Bring in routes
routes(router);

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(port);

console.log(`Listening on ${port}`);
