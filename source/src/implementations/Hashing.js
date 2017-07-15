const IHashing = require('abstractions/IHashing');
const inversify = require('inversify');
const hashing = require('object-hash');

class Hashing extends IHashing {
    constructor() { 
        super(); 
    }

    getHashCode(obj) {
        return hashing(obj);
    }
}

module.exports = exports = Hashing;