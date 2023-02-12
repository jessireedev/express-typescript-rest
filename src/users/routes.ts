import { Request, Response, Router } from "express"

export const UsersRouter = Router()

UsersRouter.get('/', (req: Request, res: Response) => {
  res.send({
    "result": "ok",
    "data" : "users"
  })
})