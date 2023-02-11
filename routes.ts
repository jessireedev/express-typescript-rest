import express from 'express';
import UsersRouter from './src/users/routes';

export const routes = express.Router();

routes.use("/users", UsersRouter);