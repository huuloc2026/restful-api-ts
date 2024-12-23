import express from 'express';
import UserAdvanceController from 'modules/UserAdvance/userAdvance.controllers';

const UserAdvanceRouter = express.Router();

// Tạo mới UserAdvance
UserAdvanceRouter.post('/userAdvance', UserAdvanceController.createUserAdvance);

// Lấy tất cả UserAdvance
UserAdvanceRouter.get('/userAdvances', UserAdvanceController.getUserAdvances);

// Lấy UserAdvance theo userId
UserAdvanceRouter.get('/userAdvance/:userId', UserAdvanceController.getUserAdvanceByUserId);

// Cập nhật UserAdvance
UserAdvanceRouter.put('/userAdvance/:userId', UserAdvanceController.updateUserAdvance);

// Xóa UserAdvance
UserAdvanceRouter.delete('/userAdvance/:userId', UserAdvanceController.deleteUserAdvance);

export default UserAdvanceRouter;
