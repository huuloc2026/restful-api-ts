import AuthController from 'modules/auth/auth.controllers';
import { AuthDTO } from 'modules/auth/auth.dto';
import express from 'express';
import { validateMiddleware } from 'middlewares/validateMiddleware';


const AuthRouter = express.Router();

// Login 
AuthRouter.post('/login', validateMiddleware(AuthDTO), AuthController.Login);

AuthRouter.post('/logout', AuthController.Logout)

AuthRouter.get('/refreshtoken', AuthController.refreshAccessToken)


// AuthRouter.get('/check', AuthController.CheckKey)


/* FOR SET COOKIES
// AuthRouter.get('/refreshtoken', AuthController.refreshAccessToken) 

// AuthRouter.post('/refreshtoken',AuthController.logout) // Log out
*/
export default AuthRouter;
