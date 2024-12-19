import { NextFunction, Request, RequestHandler, Response } from "express";
import { AuthService } from "services/Auth.services";
import { UserService } from "services/User.services";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "utils/jwtUtil";
import responseHandler from "utils/ResponseHandler";
import { sendRefreshToken } from "utils/sendRefreshToken";
// import {  verifyPassword } from 'utils/passwordUtils';

const authService = new AuthService();

class AuthController {
  static Login: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { userName, password } = req.body;
    console.log(userName, password);
    try {
      const userInfo = await authService.loginUser(userName, password);
      // console.log(userInfo.refreshToken);
      // console.log("LOGIN:Controller>>>>", userInfo.refreshToken)
      sendRefreshToken(res, userInfo.refreshToken);
      responseHandler.success(res, 201, userInfo, "Login successfully");
    } catch (error) {
      responseHandler.error(res, 500, error, "Failed login");
      next(error);
    }
  };
  static refreshAccessToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> => {
    const token = req.cookies?.refreshToken; // Lấy Refresh Token từ cookie
    //const token = ""
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTczNDQ1NjgwNCwiZXhwIjoxNzM0NDU2ODA0fQ.v4qHaSKar5FqVSynWVfm6nVGNETqqWu8nntbEjhoxgY"
    // console.log(token);
    if (!token) {
      return responseHandler.error(
        res,
        403,
        "Refresh token required",
        "Fail refresh new access token",
      );
    }
    try {
      const user = verifyRefreshToken(token);
      console.log("User info from refreshAccessToken::", user);
      if (typeof user === "object" && "userId" in user) {
        const { userId } = user;
        const newAccessToken = generateAccessToken(userId);
        const newRefreshToken = generateRefreshToken(userId);
        sendRefreshToken(res, newRefreshToken);
        return responseHandler.success(
          res,
          201,
          { accessToken: newAccessToken },
          "Refresh:: Access Token successfully",
        );
      } else {
        return responseHandler.error(
          res,
          403,
          "Refresh Token invalid ! Please Log in",
          "Fail refresh new access token",
        );
      }
    } catch (err) {
      return responseHandler.error(
        res,
        403,
        err,
        "Fail refresh new access token",
      );
    }
  };

  static logout: RequestHandler = (req: Request, res: Response) => {
    // console.log(req.cookies.refreshToken);
    res.clearCookie("refreshToken", { path: "/auth/refresh" });
    responseHandler.success(
      res,
      201,
      "Log out successfully and clear all",
      "Log out successfully and clear all",
    );
  };
}

export default AuthController;

