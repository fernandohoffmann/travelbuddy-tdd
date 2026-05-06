import { Sequelize } from 'sequelize';
import 'dotenv/config';

const env = process.env.NODE_ENV || 'development';

let sequelize;

if (env === 'test') {
  sequelize = new Sequelize('sqlite::memory:', {
    logging: false,
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306,
      logging: false,
    }
  );
}

export default sequelize;
