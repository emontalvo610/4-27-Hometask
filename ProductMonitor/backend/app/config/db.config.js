module.exports = {
  HOST: "127.0.0.1",
  USER: "postgres",
  PORT: 5432,
  PASSWORD: "d119eveloper2020!A",
  DB: "db_chrome_extension",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
