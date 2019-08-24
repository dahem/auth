import express from 'express';
import baseController from 'controllers/util/baseController';
import addBasicRouters from 'routes/util/addBasicRouters';

export default (model, controller = null) => {
  const router = express.Router();
  if (controller !== null) {
    addBasicRouters(router, controller, model);
  } else {
    addBasicRouters(router, baseController(model), model);
  }
  return router;
};
