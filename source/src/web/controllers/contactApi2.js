const VERBS = require("models/verbs");
const ILogging = require("abstractions/ILogging");
const baseRoute = "/api/contact2";

const controller = [{
    verb: VERBS.GET,
    route: baseRoute,
    dependencies: [
        ILogging.Type 
    ],
    callback: async (ctx, next, logging) => {
        try {
            logging.debug(`logging ${logging.__timestamp__} ${logging.__hashcode__} `);
            ctx.body = "hello world 2";
            await next();
        } catch(ex) {
            ctx.body = "oops";
        }
    }
}];

module.exports = exposts = controller;