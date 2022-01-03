
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { colors } from '../constants/cli-colors';
import { formatDate } from '../helpers/format-Date';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
        const startTime = Date.now();
        res.on('finish', () => {
            const level = `${colors.fg.magenta} HTTP`;
            const timestamp = `${colors.fg.green} ${formatDate(new Date())}`;
            const method = `${colors.fg.green} ${req.method}`;
            const url = `${colors.fg.white} ${req.originalUrl}`;
            const statusCode = res.statusCode >= 400 ?
                `${colors.fg.red} ${res.statusCode} 🥲` :
                `${colors.fg.green} ${res.statusCode} 🥳🎉`;
            const responseTime = `${colors.fg.yellow} ${Date.now() - startTime}ms`;
            console.log(`🍕${level}  ${timestamp}  ${method}  ${url}  ${statusCode}  ${responseTime}`);
        });
        next();
  }
}
