import Sequelize, { Model } from 'sequelize';
import { hashPassword, comparePassword, validatePassword } from 'helpers/password';

export default (sequelize) => {
  class User extends Model {
    static associate() {
      this.belongsToMany(sequelize.models.Client, {
        through: 'ClientUser',
        foreignKey: 'userId',
      });
    }

    checkPassword(password) {
      return comparePassword(password, this.password);
    }
  }
  User.init(
    {
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          customValidator(value) {
            validatePassword(value);
          },
        },
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      hooks: {
        afterValidate: (user) => {
          user.password = hashPassword(user.password);
        },
      },
      tableName: 'User',
      sequelize,
      timestamps: true,
      paranoid: true,
      name: {
        singular: 'user',
        plural: 'users',
      },
    },
  );
  return User;
};
