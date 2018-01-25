import express from 'express'
import routes from './routes'

const app = express();
app.use('/assets', express.static('assets'))
routes({app})
app.listen(8080);
console.log('listening');
