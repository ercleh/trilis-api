import {
    ExceptionFilter,
    HttpException,
    HttpStatus,
    ArgumentsHost,
    Catch,
    Logger,
  } from '@nestjs/common';
  
  @Catch()
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      const status = exception.getStatus
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
  
      const errorResponse = {
        code: status,
        timestamp: new Date().toLocaleDateString(),
        path: request.url,
        method: request.method,
        message:
          status !== HttpStatus.INTERNAL_SERVER_ERROR
            ?  exception.message || null
            : 'Internal server error',
      };
  
      Logger.error(
        `${request.method} ${request.url}`,
        exception.stack,
        'HttpExceptionFilter',
      );
  
      response.status(status).json(errorResponse);
    }
  }
  