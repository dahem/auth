import express from 'express';
import baseController from 'controllers/util/baseController';
import addBasicRouters from 'routes/util/addBasicRouters';

export default (model, options = {}) => {
  const { controller } = options;
  const router = express.Router();
  if (controller !== undefined) {
    addBasicRouters(router, controller, model, options);
  } else {
    addBasicRouters(router, baseController(model), model, options);
  }
  return router;
};
