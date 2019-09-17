import { insertAndDeleteUsingModel } from 'db/util/migration';
import models from 'db/models';
import { ADMIN, CLERK } from 'db/constants/user';
import access from 'db/seeders-data/access';

const tableName = 'User';
const data = [
  {
    name: 'Administador',
    email: 'ris.admin@drtis.com.br',
    username: 'super-root',
    password: 'drti$',
    access: access.allAccess,
    externalId: 1, // ameplan user test
    role: ADMIN,
  },
  {
    name: 'Luana de Paula Sousa',
    email: 'luana.sousa@ameplansaude.com.br',
    username: 'luana.sousa',
    groupId: 2,
    password: 'ameplan1',
    externalId: 2, // ameplan user test
    role: CLERK,
  },
  {
    name: 'Renan Gama',
    email: 'renan.gama@ameplansaude.com.br',
    username: 'renan.gama',
    groupId: 2,
    password: 'ameplan1',
    externalId: 3, // ameplan user test
    role: CLERK,
  },
  {
    name: 'Diogo Santos Felix',
    email: 'diogo.felix@ameplansaude.com.br',
    username: 'diogo.felix',
    groupId: 2,
    password: 'ameplan1',
    externalId: 4, // ameplan user test
    role: CLERK,
  },
  {
    name: 'Adilson Simplicio',
    email: 'adilson.simplicio@ameplansaude.com.br',
    username: 'adilson.simplicio',
    groupId: 2,
    password: 'ameplan1',
    externalId: 5, // ameplan user test
    role: CLERK,

  },
  {
    name: 'Lidia Kazue Kobayashi',
    email: 'lidia.kobayashi@drtis.com.br',
    username: 'lkobayashi',
    groupId: 2,
    password: 'ameplan1',
    externalId: 6, // ameplan user test
    role: CLERK,
  },
  {
    name: 'Edson Vasconcelos',
    email: 'edson.vasconcelos@drtis.com.br',
    username: 'edson.vasconcelos',
    groupId: 2,
    password: 'ameplan1',
    externalId: 7, // ameplan user test
    role: CLERK,
  },
  {
    name: 'user1',
    email: 'user.gf@gf.com.br',
    username: 'user1',
    groupId: 1,
    password: 'ameplan1',
    externalId: 8, // ameplan user test
    role: CLERK,
  },
];

export default insertAndDeleteUsingModel(tableName, data, models.User);
