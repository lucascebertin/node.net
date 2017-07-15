const inversify = require('inversify');

//"""interfaces"""
const ILogging = require("abstractions/ILogging");
const IHashing = require("abstractions/IHashing");

//implementations
const FileLogging = require('implementations/FileLogging');
const Hashing = require("implementations/Hashing");

const container = new inversify.Container();
container.bind(ILogging.Type).to(FileLogging).inSingletonScope();
container.bind(FileLogging.Filename.Type).toConstantValue("file.log");
container.bind(IHashing.Type).to(Hashing).inSingletonScope();

module.exports = exports = container;