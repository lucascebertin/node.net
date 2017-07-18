const Router = require("koa-router");
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const glob = Promise.promisify(require("glob"));
const router = new Router();

const routing = async (resolver, koa) => {
    const controllers = await glob(`${__dirname}/modules/**/*Controller.js`, {});
    
    const applyActions = (resolver, action, router) => {
        if(action && action.verb != null
            && action.route != null
            && action.callback != null) {
            const routeVerb = router[action.verb];

            if(routeVerb) {
                const callbackWithDependenciesResolved = resolver(action);
                router[action.verb](action.route, callbackWithDependenciesResolved);
            }
        }
    };

    if (controllers && controllers != null && controllers.length > 0) {
        controllers.forEach((controller) => {
            const scheme = require(controller);

            if(scheme && scheme.length > 0) {
                scheme.forEach((action) => {
                    applyActions(resolver, action, router);
                }, this);
            }
        }, this);
    }

    koa.use(router.routes())
        .use(router.allowedMethods());
};

module.exports = exports = routing;