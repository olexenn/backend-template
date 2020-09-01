import * as express from 'express';
const router = express.Router();
import { home } from './controllers/home.controller';

router.get('/:message?', home);

module.exports = router;
