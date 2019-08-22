import express from 'express';
import models from 'db/models';
import crudRouter from 'routes/util/crudRouter';
import user from './user';

const { Client } = models;

const router = express.Router();

router.use('/users', user);
router.use('/clients', crudRouter(Client));

export default router;
