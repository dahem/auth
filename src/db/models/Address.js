import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class Address extends Model {
    static associate() {
      this.hasOne(sequelize.models.Client, {
        foreignKey: 'addressId',
      });
    }
  }
  Address.init(
    {
      name: {
        type: Sequelize.STRING,
        canUpdate: false,
        allowNull: false,
      },
    },
    {
      tableName: 'Address',
      sequelize,
      timestamps: true,
      paranoid: true,
      name: {
        singular: 'address',
        plural: 'addresses',
      },
    },
  );
  return Address;
};
