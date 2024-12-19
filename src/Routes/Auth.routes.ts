import AuthController from 'controller/Auth.controllers';
import { AuthDTO } from 'entities/AuthDTO/AuthDTO';
import express from 'express';
import { validateMiddleware } from 'middlewares/validateMiddleware';


const AuthRouter = express.Router();

// Login 
AuthRouter.post('/login', validateMiddleware(AuthDTO), AuthController.Login);

AuthRouter.get('/refreshtoken', AuthController.refreshAccessToken) 

// AuthRouter.post('/refreshtoken',AuthController.logout) // Log out

export default AuthRouter;
