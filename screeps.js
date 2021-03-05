/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */

let secrets = require('./secrets.json')
module.exports = {
  main: {
    token: secrets.token.main || secrets.token,
    hostname: 'screeps.com',
    protocol: 'https',
    port: 443,
    path: '/',
    branch: 'main'
  },
  sim: {
    token: secrets.token.sim || secrets.token,
    hostname: 'screeps.com',
    protocol: 'https',
    port: 443,
    path: '/',
    branch: 'sim'
  }
};

