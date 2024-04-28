const db = require("../models");
const Product = db.products;

// Create and Save a new Product
exports.create = async (req, res) => {
  console.log("@ product create Api", req.body);
  // Validate request
  if (!req.body.name || !req.body.image) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const productExists = await Product.findOne({
    where: { name: req.body.name },
  });

  if (productExists) {
    res.status(400).send({ message: "product already exists" });
    return;
  }

  // Create a Product
  const product = {
    name: req.body.name,
    image: req.body.image,
  };

  // Save Product in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.findAll({ order: [["createdAt", "DESC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};
