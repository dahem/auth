import express from 'express';
import baseController from 'controllers/util/baseController';
import addBasicRouters from 'routes/util/addBasicRouters';

export default (model) => {
  const router = express.Router();
  addBasicRouters(router, baseController(model), model);
  return router;
};
