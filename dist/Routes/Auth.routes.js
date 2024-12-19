import AuthController from 'controller/Auth.controllers';
import { AuthDTO } from 'utils/DTO/AuthDTO/AuthDTO';
import express from 'express';
import { validateMiddleware } from 'middlewares/validateMiddleware';
const AuthRouter = express.Router();
AuthRouter.post('/signup', AuthController.SignUp);
// Login 
AuthRouter.post('/login', validateMiddleware(AuthDTO), AuthController.Login);
AuthRouter.get('/refreshtoken', AuthController.refreshAccessToken);
// AuthRouter.post('/refreshtoken',AuthController.logout) // Log out
export default AuthRouter;
//# sourceMappingURL=Auth.routes.js.map