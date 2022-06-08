const program = require('commander');
const package = require('../../package.json')
const helpOptions = () => {
    program.version(package.version, '-v -V --version').parse(process.argv)
}

module.exports = helpOptions;
