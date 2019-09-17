import Sequelize, { Model } from 'sequelize';
import { hashPassword, comparePassword, validatePassword } from 'helpers/password';
import { buildToken } from 'helpers/token';
import { roles, CLERK } from 'db/constants/user';
import UnauthorizedError from 'errors/UnauthorizedError';

export default (sequelize) => {
  class User extends Model {
    static associate() {
      this.belongsToMany(sequelize.models.Client, {
        through: 'ClientUser',
        foreignKey: 'userId',
      });
    }

    static async getToken(username, password) {
      const user = await User.findOne({
        where: { username },
        attributes: ['id', 'username', 'name'],
      });

      if (!user || !user.isActive || !user.checkPassword(password)) {
        throw new UnauthorizedError();
      }

      return buildToken(user.getDataValue());
    }

    checkPassword(password) {
      return comparePassword(password, this.password);
    }
  }
  User.init(
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      code: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
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
        unique: true,
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
        validate: {
          customValidator(value) {
            validatePassword(value);
          },
        },
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
