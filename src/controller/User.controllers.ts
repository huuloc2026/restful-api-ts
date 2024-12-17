import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from 'services/User.services';
import responseHandler from 'utils/ResponseHandler';

const userService = new UserService();

class UserController {
    // Tạo mới người dùng
    static createUser: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { userName, fullName, email, phoneNumber } = req.body;
        try {
            const newUser = await userService.createUser(userName, fullName, email, phoneNumber);
            responseHandler.success(res, 201, newUser, 'User created successfully');
        } catch (error) {
            responseHandler.error(res, 500, error, 'Failed to create user');
            next(error);
        }
    };
    // Lấy tất cả người dùng
    static getUsers: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const users = await userService.getUsers();
            responseHandler.success(res, 200, users, 'Fetched all users');
        } catch (error) {
            responseHandler.error(res, 500, error, 'Error fetching users');
            next(error);
        }
    };

    // Lấy người dùng theo ID
    static getUserById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const userId = parseInt(req.params.id);

        if (isNaN(userId)) {
            responseHandler.error(res, 400, 'Validation Error', 'Invalid user ID');
            return;
        }

        try {
            const user = await userService.getUserById(userId);
            if (user) {
                responseHandler.success(res, 200, user, 'User fetched successfully');
            } else {
                responseHandler.error(res, 404, 'Not Found', 'User not found');
            }
        } catch (error) {
            responseHandler.error(res, 500, error, 'Error fetching user');
            next(error);
        }
    };

    // Cập nhật người dùng
    static updateUser: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const userId = parseInt(req.params.id);
        const updatedData = req.body;

        if (isNaN(userId)) {
            responseHandler.error(res, 400, 'Validation Error', 'Invalid user ID');
            return;
        }

        try {
            const updatedUser = await userService.updateUser(userId, updatedData);
            if (updatedUser) {
                responseHandler.success(res, 200, updatedUser, 'User updated successfully');
            } else {
                responseHandler.error(res, 404, 'Not Found', 'User not found');
            }
        } catch (error) {
            responseHandler.error(res, 500, error, 'Error updating user');
            next(error);
        }
    };

    // Xóa người dùng
    static deleteUser: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const userId = parseInt(req.params.id);

        if (isNaN(userId)) {
            responseHandler.error(res, 400, 'Validation Error', 'Invalid user ID');
            return;
        }

        try {
            const deletedUserId = await userService.deleteUser(userId);
            if (deletedUserId) {
                responseHandler.success(res, 200, { message: `User with ID ${deletedUserId} deleted` }, 'User deleted successfully');
            } else {
                responseHandler.error(res, 404, 'Not Found', 'User not found');
            }
        } catch (error) {
            responseHandler.error(res, 500, error, 'Error deleting user');
            next(error);
        }
    };
}

export default UserController;