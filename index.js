#!/usr/bin/env node

const program = require('commander')
const helpOptions = require('./lib/core/help')
const init = require('./lib/core/init')

helpOptions()
init()
program.parse(process.argv)