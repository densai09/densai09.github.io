module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorials", {
      image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      sellingprice: {
        type: Sequelize.DECIMAL
      },
      stock: {
        type: Sequelize.DECIMAL
      }
    });
  
    return Tutorial;
  };