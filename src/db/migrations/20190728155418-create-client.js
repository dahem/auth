import { createAndDropTable, timestampsColumns } from '../util/migration';

const tableName = 'Client';
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
  addressId: {
    type: Sequelize.INTEGER,
    references: { model: 'Address', key: 'id' },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
