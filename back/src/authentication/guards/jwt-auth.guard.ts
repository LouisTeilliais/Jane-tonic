import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        
        // Autoriser les requêtes OPTIONS pour éviter les problèmes CORS
        if (request.method === 'OPTIONS') {
            return true;
        }

        return super.canActivate(context);
    }
}
