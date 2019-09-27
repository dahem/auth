
import BadRequestError from 'errors/BadRequestError';
import { LIMIT_IMPORT_DATA } from 'db/constants';

export default model => async (req, res, next) => {
  try {
    if (req.body.length > LIMIT_IMPORT_DATA) throw BadRequestError('limitDataError');
    const resultImport = await model.importData(req.body, req.query.type);
    return res.status(201).send(resultImport);
  } catch (e) {
    return next(e);
  }
};
