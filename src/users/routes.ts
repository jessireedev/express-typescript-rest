import { Request, Response, Router } from "express";

const UsersRouter = Router()

UsersRouter.get('/', (req: Request, res: Response) => {
  res.send({
    "result": "ok",
    "data" : "users"
  });
});

export default UsersRouter