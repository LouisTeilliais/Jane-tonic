import { AuthenticationService } from '../services/authentication.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthenticationService);
    validate(payload: JwtPayload): Promise<any>;
}
export interface JwtPayload {
    login: string;
}
export {};
