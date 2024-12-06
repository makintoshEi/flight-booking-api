import { Request, Response } from 'express';
import userService from '../services/userService';

export class UserController {
    static getUserByEmail = (req: Request, res: Response) => {
        const email = req.query['email'];
        if (typeof email === 'string') {
            const response = userService.getUserByEmail(email);
            res.status(200).json(response);
        } else {
            res.status(400).json({
                status: 'error',
                message: 'Invalid email'
            });
        }
    }
}