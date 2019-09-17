import { roles, CLERK } from 'db/constants/user';
import { createAndDropTable, timestampsColumns } from '../util/migration';

const tableName = 'User';
const defineTable = Sequelize => ({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    unique: true,
    primaryKey: true,
  },
  code: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
  },
  operatorCode: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telephone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM(...roles),
    defaultValue: CLERK,
    allowNull: false,
  },
  access: {
    type: Sequelize.JSON,
  },
  externalId: {
    type: Sequelize.INTEGER,
    unique: true,
  },
  groupId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'UserGroup',
      key: 'id',
    },
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
