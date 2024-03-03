
import { Router } from 'express'
import { routerStatus, routerTodos } from "../src/routes.js";
const router = Router()

router.use('/status', routerStatus)
router.use('/todos', routerTodos)

export default (app) => {
	app.use('/api', router)
}