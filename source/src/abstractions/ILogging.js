const inversify = require('inversify');

class ILogging {
    debug(line){ throw Error("not implemented"); };
    warn(line){ throw Error("not implemented"); };
    error(line){ throw Error("not implemented"); };
    info(line){ throw Error("not implemented"); };
    fatal(line){ throw Error("not implemented"); };
    debugEx(line, exception){ throw Error("not implemented"); };
    warnEx(line, exception){ throw Error("not implemented"); };
    errorEx(line, exception){ throw Error("not implemented"); };
    fatalEx(line, exception){ throw Error("not implemented"); };
}

ILogging.Type = Symbol("ILogging");
inversify.decorate(inversify.injectable(), ILogging);

module.exports = exports = ILogging;