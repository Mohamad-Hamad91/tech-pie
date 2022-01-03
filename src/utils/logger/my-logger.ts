import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { createLogger, transports, Logger, format } from 'winston';
import 'winston-daily-rotate-file';
import { formatDate } from '../helpers/format-Date';
import { colors } from '../constants/cli-colors';

@Injectable()
export class MyLogger implements LoggerService {

    winstonLogger: Logger;

    constructor() {
        const transport = new transports.DailyRotateFile({
            filename: 'log/log-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        });

        this.winstonLogger = createLogger({
            transports: [transport],
            // exceptionHandlers: [
            //     new transports.File({ filename: 'log/exceptions.log' })
            // ],
        });

    }

    /**
     * Write a 'log' level log.
     */
    log(message: any, ...optionalParams: any[]) {
        const timestamp = formatDate(new Date());
        console.log(
            `🏷️ ${colors.fg.blue} INFO`,
            ` ${colors.fg.green} ${timestamp}`,
            `${colors.fg.white} ${message}`,
        );
        const formattedMessage = `INFO: ${timestamp} ${message}`;
        this.winstonLogger.log('info', formattedMessage);
    }

    /**
     * Write an 'error' level log.
     */
    error(message: any, ...optionalParams: any[]) {
        const timestamp = formatDate(new Date());
        const formattedMessage = `ERROR: ${timestamp} ${message}`;
        this.winstonLogger.log('error', formattedMessage);
        console.log(
            `🚫 ${colors.fg.red}ERROR`,
            `${colors.fg.yellow}${timestamp}`,
            `${colors.fg.red}${message}`,
        );
        console.log(optionalParams);
        this.winstonLogger.log('error', optionalParams);

    }

    /**
     * Write a 'warn' level log.
     */
    warn(message: any, ...optionalParams: any[]) {
        const timestamp = formatDate(new Date());
        console.log(
            `⚠️ ${colors.fg.yellow} WARN`,
            ` ${colors.fg.white} ${timestamp}`,
            `${colors.fg.magenta} ${message}`,
        );
        const formattedMessage = `Warning: ${timestamp} ${message}`;
        this.winstonLogger.log('warn', formattedMessage, formattedMessage);
    }

    /**
     * Write a 'debug' level log.
     */
    debug(message: any, ...optionalParams: any[]) {
        const timestamp = formatDate(new Date());
        console.log(
            `⚠️ ${colors.fg.yellow} DEBUG`,
            ` ${colors.fg.white} ${timestamp}`,
            optionalParams,
            `${colors.fg.magenta} ${message}`,
        );
    }

    /**
     * Write a 'verbose' level log.
     */
    verbose(message: any, ...optionalParams: any[]) {
        const timestamp = formatDate(new Date());
        console.log(
            `⚠️ ${colors.fg.yellow} VERBOSE`,
            ` ${colors.fg.white} ${timestamp}`,
            optionalParams,
            `${colors.fg.magenta} ${message}`,
        );
    }
}