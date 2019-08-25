'use strict';
module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define('burgers', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  burgers.associate = function(models) {
    // associations can be defined here
  };
  return burgers;
};