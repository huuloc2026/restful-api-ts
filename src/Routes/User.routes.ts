import express from 'express';
import UserController from 'controller/User.controllers';
import { validateMiddleware } from 'middlewares/validateMiddleware';
import { CreateUserDTO } from 'utils/DTO/UserDTO/CreateUserDTO';
import { GetUserbyIdDTO } from 'utils/DTO/UserDTO/GetUseridDTO';
import { DeleteUserDTO } from 'utils/DTO/UserDTO/DeleteUseridDTO';
import { UpdateUserDTO } from 'utils/DTO/UserDTO/UpdateUserDTO';
import { authenticateAccessToken } from 'middlewares/authenticateAccessToken';

const UserRouter = express.Router();

// Tạo mới người dùng
UserRouter.post('/createrNewUser', validateMiddleware(CreateUserDTO), UserController.createUser);

// // Lấy tất cả người dùng
UserRouter.get('/getAllUsers', authenticateAccessToken ,UserController.getUsers);

// // Lấy người dùng theo ID
// UserRouter.get('/getUserById/:id', validateMiddleware(GetUserbyIdDTO),UserController.getUserById);

// // Cập nhật thông tin người dùng
// UserRouter.put('/updateUser/:id',validateMiddleware(UpdateUserDTO) , UserController.updateUser);

// // Xóa người dùng
// UserRouter.delete('/deleteUser/:id', validateMiddleware(DeleteUserDTO), UserController.deleteUser);

export default UserRouter;
