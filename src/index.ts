import { Request, Response, Router } from "express"

export const IndexRouter = Router()

IndexRouter.get('/', (req: Request, res: Response) => {
  res.send({
    "result": "ok"
  })
})