const log4js = require('log4js');

log4js.configure({
    appenders: {
        everything: {
            type: 'file',
            filename: `./reports/logs/all_logs.log`,
        },
        emergencies: {
            type: 'file',
            filename: `./reports/logs/error_logs.log`,
            layout: {
                type: 'pattern',
                pattern: '[%d] [%p] - %f:%l %m%n',
            },
        },
        'just-errors': {
            type: 'logLevelFilter',
            appender: 'emergencies',
            level: 'error'
        },
        console: {
            type: 'console'
        },
    },
    categories: {
        default: {
            appenders: ['everything', 'just-errors', 'console'],
            level: 'info',
            enableCallStack: true
        },
    },
});

module.exports = {
    Logger: log4js.getLogger(),
};