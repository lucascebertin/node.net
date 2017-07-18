"use strict";

const Koa = require('koa');
const Router = require('koa-router');

const main = async () => {
    const app = new Koa();
    const serverPort = 3000;
    const router = new Router();
    const dependencyResolver = require('web/compositionRoot');
    const resolver = require("web/resolver")(dependencyResolver);
    const routing = require("web/route");
    const bodyparser = require("koa-bodyparser");
    const qs = require("koa-qs");

    qs(app);
    app.use(bodyparser());
    await routing(resolver, app);

    app.listen(serverPort, () => 
        console.log(`Server up and running on port ${serverPort}...`)
    );
};

main();