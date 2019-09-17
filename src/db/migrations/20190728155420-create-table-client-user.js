import { createAndDropTable, timestampsColumns } from '../util/migration';

const tableName = 'ClientUser';
const defineTable = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clientId: {
    type: Sequelize.INTEGER,
    references: { model: 'Client', key: 'id' },
    unique: 'client_user_index',
    allowNull: false,
  },
  userId: {
    type: Sequelize.UUID,
    references: { model: 'User', key: 'id' },
    unique: 'client_user_index',
    allowNull: false,
  },
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
