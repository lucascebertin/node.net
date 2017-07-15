const inversify = require('inversify');

class IHashing {
    getHashCode(obj) { throw new Error("not implemented"); }
}

IHashing.Type = Symbol("IHashing");
inversify.decorate(inversify.injectable(), IHashing);

module.exports = exports = IHashing;