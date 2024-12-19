import express from "express"
import UserRouter from "./User.routes"
import UserAdvanceRouter from "./UserAdvance.routes"
import AuthRouter from "./Auth.routes"
const router = express()

router.use('/user', UserRouter)
router.use('/userAdvance', UserAdvanceRouter)
router.use('/auth',AuthRouter)
export default router