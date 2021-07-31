import express from 'express';

import { test, createTest } from '../controllers/test.js'

const router = express.Router();

router.get( '/', test);
router.post('/', createTest);

export default router;