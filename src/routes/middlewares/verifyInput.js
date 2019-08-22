import { validationResult } from 'express-validator';

function findMostCommon(numbers) {
  const counted = numbers.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  const mode = Object.keys(counted).reduce((a, b) => (counted[a] > counted[b] ? a : b));

  return mode;
}

export default validations => async (req, res, next) => {
  const statusErrors = [];
  await Promise.all(
    validations.map((item) => {
      let validation = null;
      if (Array.isArray(item)) {
        // eslint-disable-next-line prefer-destructuring
        validation = item[0];
        statusErrors.push(item[1]);
      } else {
        validation = item;
        statusErrors.push(422);
      }
      return validation.run(req);
    }),
  );

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(findMostCommon(statusErrors)).json({ errors: errors.array() });
};
