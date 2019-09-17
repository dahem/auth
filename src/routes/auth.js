import express from 'express';
import models from 'db/models';

const router = express.Router();
const { User } = models;

router.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const token = await User.getToken(username, password);
    res.set('access-token', token);
    return res.status(200);
  } catch (e) {
    return next(e);
  }
});

export default router;
