const VERBS = require("models/verbs");
const ILogging = require("abstractions/ILogging");
const baseRoute = "/api/contact";

const controller = [{
    verb: VERBS.GET,
    route: baseRoute,
    dependencies: [
        ILogging.Type 
    ],
    callback: async (ctx, next, logging) => {
        try {
            logging.debug(`logging ${logging.__timestamp__} ${logging.__hashcode__} `);
            ctx.body = ctx.query;
            await next();
        } catch(ex) {
            ctx.body = "oops";
        }
    }
}, {
    verb: VERBS.POST,
    route: baseRoute,
    dependencies: [
        ILogging.Type 
    ],
    callback: async (ctx, next, logging) => {
        try {
            logging.debug(`logging ${logging.__timestamp__} ${logging.__hashcode__} `);
            ctx.body = ctx.request.body;
            await next();
        } catch(ex) {
            ctx.body = "oops";
        }
    }
}];

module.exports = exposts = controller;