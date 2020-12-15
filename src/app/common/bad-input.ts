import { AppError } from './app-error';
export class BadInput implements AppError{
    constructor(public originalError?: any){}
}