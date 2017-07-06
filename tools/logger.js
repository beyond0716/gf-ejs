'use strict';
var log4js = require('log4js');

fse.mkdirsSync(config.log.dir);
fse.mkdirsSync(config.log.dir + 'main');
var log4jsConfig = {
  appenders: [
    {
      type: 'console'
    },
    {
      category: 'main',
      type: 'dateFile',
      filename: path.join(config.log.dir, 'main/'),
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: true,
      maxLogSize: 1024 * 20,
      backups:3
    },
    {
      category: 'main',
      type: 'logLevelFilter',
      level: 'WARN',
      appender: {
        type: 'file',
        filename: config.log.dir + 'warn.log',
        maxLogSize: 1024 * 20
      }
    },
    {
      category: 'main',
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: {
        type: 'file',
        filename: config.log.dir + 'error.log',
        maxLogSize: 1024 * 20
      }
    }
  ],
  replaceConsole: true
}
log4js.configure(log4jsConfig);
var logger = log4js.getLogger('main');
logger.setLevel('AUTO');
logger.log4js = log4js;
module.exports = logger;
