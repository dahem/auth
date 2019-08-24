import express from 'express';
import models from 'db/models';
import crudRouter from 'routes/util/crudRouter';
import userController from '../controllers/user';

const { Client, User } = models;

const router = express.Router();

router.use('/users', crudRouter(User, userController));
router.use('/clients', crudRouter(Client));

export default router;
