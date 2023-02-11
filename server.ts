import app from './app'
import bunyan from 'bunyan'

const port = process.env.PORT;

const log  = bunyan.createLogger({ 
  name: "server", 
})

app.listen(port, () => {
  log.info(`Server is running at https://localhost:${port}`);
});