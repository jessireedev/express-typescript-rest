import express, { Express } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

const app: Express = express();

app.use("/", routes)

export default app