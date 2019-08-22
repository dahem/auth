import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class Client extends Model {
    static associate() {
      this.belongsToMany(sequelize.models.User, {
        through: 'ClientUser',
        foreignKey: 'clientId',
      });
      this.belongsTo(sequelize.models.Address, {
        foreignKey: 'addressId',
      });
    }
  }
  Client.init(
    {
      name: {
        type: Sequelize.STRING,
        canUpdate: false,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: 'Client',
      sequelize,
      timestamps: true,
      paranoid: true,
      name: {
        singular: 'client',
        plural: 'clients',
      },
    },
  );
  return Client;
};
