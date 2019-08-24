import _ from 'lodash';

export function isExtrictedObject(val) {
  if (val === null) return false;
  return _.isObject(val) && !_.isArray(val);
}
