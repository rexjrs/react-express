import express from 'express';
import router from './router'

const server = express();

server.use('/assets', express.static('assets'));

router({server})

server.listen(8080);
console.log('listening')