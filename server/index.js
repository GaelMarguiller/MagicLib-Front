import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import http from 'http'
import mongoose from 'mongoose'
import cors from 'cors'

import {routeSignUp} from './route'
import {routeLogin} from './route'

const expressServer = express();
const port = 3090
const server = http.createServer(expressServer)

mongoose.connect('mongodb+srv://Grimgor:8ew6EPQ8lec4B1Bx@cluster0.rpbcv.mongodb.net/MagicLib?retryWrites=true&w=majority');
mongoose.connection
    .once('open', () => console.log('Connecté à Mlab'))
    .on('error', error => console.log(`Erreur de connection à Mlab : ${error}`));

expressServer.use(morgan('combined'));
expressServer.use(bodyParser.json({type: '*/*'}));
expressServer.use(cors());

//home(expressServer);
routeSignUp(expressServer);
routeLogin(expressServer);
server.listen(port);
console.log(`Le server écoute sur le port ${port}`);