import express from 'express';
import user from './user';
import client from './client';

const router = express.Router();
router.use('/users', user);
router.use('/clients', client);

export default router;
