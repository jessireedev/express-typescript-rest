import { Router } from 'express'
import { UsersRouter } from './users/routes'
import { IndexRouter } from '.'

export const routes = Router()

routes.use("/", IndexRouter)
routes.use("/users", UsersRouter)