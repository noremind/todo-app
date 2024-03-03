import { Router } from 'express'
import { getStatus } from './controller/getStatus.js'
import { getTodos } from './controller/getTodos.js'

const routerStatus = new Router()
const routerTodos = new Router()

routerStatus.get('/', (req, res) => {
	getStatus(res)
})

routerTodos.get('/', (req, res) => {
	getTodos(res)
})

export { routerStatus, routerTodos }