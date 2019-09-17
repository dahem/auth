import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class UserGroup extends Model {}
  UserGroup.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      access: {
        type: Sequelize.JSON,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: 'UserGroup',
      sequelize,
      timestamps: true,
      paranoid: true,
      name: {
        singular: 'userGroup',
        plural: 'userGroups',
      },
    },
  );
  return UserGroup;
};
