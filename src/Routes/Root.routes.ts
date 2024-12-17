import express from "express"
import UserRouter from "./User.routes"
import UserAdvanceRouter from "./UserAdvance.routes"
const router = express()

router.use('/user', UserRouter)
router.use('/userAdvance', UserAdvanceRouter)
export default router