import bcrypt from 'bcryptjs';
import PasswordValidator from 'password-validator';

const schema = new PasswordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces();

const SALT_FACTOR = 10;

export function hashPassword(password) {
  const salt = bcrypt.genSaltSync(SALT_FACTOR);
  const ans = bcrypt.hashSync(password, salt);
  return ans;
}

export function comparePassword(guess, hashedPassword) {
  return bcrypt.compareSync(guess, hashedPassword);
}

export function validatePassword(password) {
  const result = schema.validate(password, { list: true });
  if (result.length > 0) throw new Error(`password ${result.join(', ')}`);
}
