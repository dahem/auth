import { createAndDropTable, timestampsColumns } from '../util';

const tableName = 'User';
const defineTable = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
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
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
