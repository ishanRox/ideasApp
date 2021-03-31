import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {

        const ctx= host.switchToHttp();
        const reqest = ctx.getRequest();
        const response = ctx.getResponse();

        response.status(404).json({found:false});
    } 

    
}