import express from 'express';
import { DB_URL } from './config';
import errorHandler from './middlewares/errorHandler';
const app = express();
import routes from './routes';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
const APP_PORT = process.env.PORT || 9000;

//Database Connection
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB Connected');
});

global.appRoot = path.resolve(__dirname);

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/api', routes);
app.use('/music', express.static('music'));

app.use(errorHandler);
app.listen(APP_PORT, ()=> console.log(`Listening on port ${APP_PORT}.`));