import { Request, Response, NextFunction } from 'express';
import { UserAdvanceService } from 'modules/UserAdvance/userAdvance.services';
import responseHandler from 'utils/ResponseHandler';

const userAdvanceService = new UserAdvanceService();

class UserAdvanceController {
    // Tạo mới UserAdvance
    static createUserAdvance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { userId, address, dob, profileUrl } = req.body;

        if (!userId) {
             responseHandler.error(res, 400, 'Validation Error', 'userId is required');
        }

        try {
            const newUserAdvance = await userAdvanceService.createUserAdvance(userId, address, dob, profileUrl);
             responseHandler.success(res, 201, newUserAdvance, 'UserAdvance created successfully');
        } catch (error) {
             responseHandler.error(res, 500, 'Internal Server Error', 'Error creating userAdvance');
        }
    };

    // Lấy tất cả UserAdvance
    static getUserAdvances = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userAdvances = await userAdvanceService.getUserAdvances();
             responseHandler.success(res, 200, userAdvances, 'All UserAdvances');
        } catch (error) {
             responseHandler.error(res, 500, 'Internal Server Error', 'Error fetching userAdvances');
        }
    };

    // Lấy UserAdvance theo userId
    static getUserAdvanceByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const userId = parseInt(req.params.userId);

        if (isNaN(userId)) {
             responseHandler.error(res, 400, 'Validation Error', 'Invalid userId');
        }

        try {
            const userAdvance = await userAdvanceService.getUserAdvanceByUserId(userId);
            if (userAdvance) {
                 responseHandler.success(res, 200, userAdvance, 'UserAdvance found');
            } else {
                 responseHandler.error(res, 404, 'Not Found', 'UserAdvance not found');
            }
        } catch (error) {
             responseHandler.error(res, 500, 'Internal Server Error', 'Error fetching userAdvance');
        }
    };

    // Cập nhật UserAdvance
    static updateUserAdvance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const userId = parseInt(req.params.userId);
        const updatedData = req.body;

        if (isNaN(userId)) {
             responseHandler.error(res, 400, 'Validation Error', 'Invalid userId');
        }

        try {
            const updatedUserAdvance = await userAdvanceService.updateUserAdvance(userId, updatedData);
            if (updatedUserAdvance) {
                 responseHandler.success(res, 200, updatedUserAdvance, 'UserAdvance updated successfully');
            } else {
                 responseHandler.error(res, 404, 'Not Found', 'UserAdvance not found');
            }
        } catch (error) {
             responseHandler.error(res, 500, 'Internal Server Error', 'Error updating userAdvance');
        }
    };

    // Xóa UserAdvance
    static deleteUserAdvance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const userId = parseInt(req.params.userId);

        if (isNaN(userId)) {
             responseHandler.error(res, 400, 'Validation Error', 'Invalid userId');
        }

        try {
            const deletedUserId = await userAdvanceService.deleteUserAdvance(userId);
            if (deletedUserId) {
                 responseHandler.success(res, 200, { message: `UserAdvance with userId ${deletedUserId} deleted` }, 'UserAdvance deleted successfully');
            } else {
                 responseHandler.error(res, 404, 'Not Found', 'UserAdvance not found');
            }
        } catch (error) {
             responseHandler.error(res, 500, 'Internal Server Error', 'Error deleting userAdvance');
        }
    };
}

export default UserAdvanceController;
