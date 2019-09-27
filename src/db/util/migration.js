import sequelize from '../connection';

export const transaction = fn => sequelize.transaction(fn);
// prettier-ignore
export const createTable = (tableName, defineTable) => (
  (queryInterface, Sequelize) => (
    transaction(() => queryInterface.createTable(tableName, defineTable(Sequelize)))
  )
);
// prettier-ignore
export const dropTable = tableName => (
  queryInterface => (
    transaction(() => queryInterface.dropTable(tableName))
  )
);

export const createAndDropTable = (tableName, defineTable) => ({
  up: createTable(tableName, defineTable),
  down: dropTable(tableName),
});

export const insertAndDeleteTable = (tableName, data, model = null) => {
  if (Array.isArray(data) && model === null) {
    return {
      up: queryInterface => transaction(() => queryInterface.bulkInsert(tableName, data)),
      down: queryInterface => queryInterface.bulkDelete(tableName),
    };
  }

  if (Array.isArray(data) && model !== null) {
    return {
      up: () => transaction(() => data.map(x => model.create(x))),
      down: queryInterface => queryInterface.bulkDelete(tableName),
    };
  }

  if (!Array.isArray(data)) {
    return {
      up: queryInterface => transaction(async () => {
        const resultData = await data();
        return queryInterface.bulkInsert(tableName, resultData);
      }),
      down: queryInterface => queryInterface.bulkDelete(tableName),
    };
  }

  return {};
};

export const timestampsColumns = Sequelize => ({
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
  deletedAt: { type: Sequelize.DATE },
});

export const defaultColumns = Sequelize => ({
  externalId: { type: Sequelize.INTEGER, unique: true },
  active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
  ...timestampsColumns(Sequelize),
});
