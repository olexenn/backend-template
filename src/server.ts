import express from 'express';
import dotenv from 'dotenv';
import exphbs from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';

import { LoggerStream } from '../tools/logger';

dotenv.config();

const port = process.env.SERVER_PORT;

const app: express.Application = express();

app.use(morgan('combined', { stream: new LoggerStream() }));

app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views'),
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));

app.get('/:message?', (req, res) => {
  res.render('home', { message: req.params.message });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http://localhost:${port}`);
});
