import { insertAndDeleteTable } from 'db/util/migration';
import access from 'db/seeders-data/access';

const tableName = 'UserGroup';
const data = [
  {
    name: 'Sem encaixe e cancelamento',
    access: access.noFittingAndCancel,
  }, {
    name: 'grupo ameplan',
    access: access.ameplanAccess,
  },
];

export default insertAndDeleteTable(tableName, data);
