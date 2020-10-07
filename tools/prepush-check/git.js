#!/usr/bin/env node
const colors = require('ansi-colors')
const { exec } = require('child_process')
exec('git status -s', (error, stdout) => {
  if (stdout) {
    console.error(colors.red('You have uncommitted changes!'))
  }
  process.exit(stdout ? 1 : 0)
})
