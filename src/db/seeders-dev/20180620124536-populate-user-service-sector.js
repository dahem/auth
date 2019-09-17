import _ from 'lodash';
import { insertAndDeleteUsingFunc } from 'db/util/migration';
import models from 'db/models';

const { User } = models;

const tableName = '';
async function getData() {
  const users = await User.findAll({ raw: true });
  const serviceSectors = [];
  for (let i = 0, len = users.length; i < len; i += 1) {
    serviceSectors.push({
      serviceSectorId: _.sample([1, 2]),
      userId: users[i].id,
    });
  }
  return serviceSectors;
}

export default insertAndDeleteUsingFunc(tableName, getData);
