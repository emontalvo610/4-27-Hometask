module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING(2048),
    },
  });

  return Product;
};
