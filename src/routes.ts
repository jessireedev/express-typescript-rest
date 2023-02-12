import { Router } from 'express'
import { IndexRouter } from '.'

export const routes = Router()

routes.use("/", IndexRouter)