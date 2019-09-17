import Sequelize from 'sequelize';
import { createNamespace } from 'cls-hooked';

import dbConfig from '../../config/dbConfig'; // not absolute path

const ns = createNamespace('db');
Sequelize.useCLS(ns);

const sequelize = new Sequelize(dbConfig);
sequelize.namespace = ns;

export default sequelize;
