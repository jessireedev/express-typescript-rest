import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bunyan from 'bunyan'

const log  = bunyan.createLogger({ 
  name: "app", 
  streams: [
    {
      level: 'info',
      stream: process.stdout
    }
  ]
})

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send({
    "hello": "world"
  });
});

app.listen(port, () => {
  log.info(`Server is running at https://localhost:${port}`);
});