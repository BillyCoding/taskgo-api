import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
const chalk = require('chalk');

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { method, originalUrl } = req;
        const startTime = Date.now();

        const methodColor = this.getMethodColor(method);

        res.on('finish', () => {
            const duration = Date.now() - startTime;
            const statusColor = res.statusCode >= 400 ? chalk.red : chalk.green;

            console.log(
                methodColor(`${method}`),
                chalk.cyan(`${originalUrl}`),
                statusColor(`${res.statusCode}`),
                chalk.yellow(`${duration}ms`),
            );
        });

        next();
    }

    // Função para retornar a cor baseada no método HTTP
    private getMethodColor(method: string) {
        switch (method) {
            case 'GET':
                return chalk.blueBright;
            case 'POST':
                return chalk.greenBright;
            case 'PATCH':
                return chalk.yellow;
            case 'PUT':
                return chalk.magentaBright;
            case 'DELETE':
                return chalk.red;
            default:
                return chalk.white;
        }
    }
}
