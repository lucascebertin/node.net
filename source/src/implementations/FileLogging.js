const ILogging = require('abstractions/ILogging');
const IHashing = require("abstractions/IHashing");

const inversify = require('inversify');
const winston = require('winston');

class FileLogging extends ILogging {
    constructor(filename, hashing) {
        super();

        this.logger = new (winston.Logger)({
            transports: [
                new (winston.transports.File)({
                    filename: filename,
                    level: 'debug'
                })
            ]
        });

        this.logger.level = "debug";
        this.__hashcode__ = hashing.getHashCode(this);
        this.__timestamp__ = Math.floor(new Date() / 1000);
    }

    debug(line) {
        this.logger.debug(line);
    }

    warn(line){
        this.logger.warn(line);
    }

    error(line){
        this.logger.error(line);
    }

    info(line){
        this.logger.info(line);
    }

    fatal(line){
        this.logger.fatal(line);
    }

    debugEx(line, exception){
        this.logger.debug(`message: ${line}\r\n exception: ${exception}`);
    }

    warnEx(line, exception){
        this.logger.warn(`message: ${line}\r\n exception: ${exception}`);
    }

    errorEx(line, exception){
        this.logger.error(`message: ${line}\r\n exception: ${exception}`);
    }

    fatalEx(line, exception){
        this.logger.fatal(`message: ${line}\r\n exception: ${exception}`);
    }
}

const filenameSymbol = Symbol("filename");
FileLogging.Filename = { Type: filenameSymbol };

inversify.decorate(inversify.injectable(), FileLogging);
inversify.decorate(inversify.inject(filenameSymbol), FileLogging, 0);
inversify.decorate(inversify.inject(IHashing.Type), FileLogging, 1);

module.exports = exports = FileLogging;