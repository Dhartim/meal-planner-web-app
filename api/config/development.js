module.exports = {
  postgres: {
    username: 'postgres',
    password: 12345678,
    database: 'meal_planner',
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false
  },
  jwt: {
    jwtSecret: '$eCrEt',
    jwtDuration: '7 days',
  }
};