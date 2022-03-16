const Sequelize = require("sequelize");
const { dbMaria } = require(ROOT_DIR + "/config/db.js");

const Privilege = dbMaria.define("privilege", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
  	type: Sequelize.STRING,
    // unique: true,
    allowNull: false
  },
  description: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
});

module.exports = Privilege;