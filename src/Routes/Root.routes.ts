import express from "express"
import UserRouter from "../modules/Users/user.routes"
import UserAdvanceRouter from "../modules/UserAdvance/userAdvance.routes"
import AuthRouter from "./Auth.routes"

const router = express()

router.use('/user', UserRouter)
router.use('/userAdvance', UserAdvanceRouter)
router.use('/auth',AuthRouter)
export default router