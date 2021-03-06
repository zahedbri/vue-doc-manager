module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Documents', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Your Document must have a Title',
        },
      },
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Document cannot be empty',
        },
      },
    },
    permission: {
      type: Sequelize.ENUM('view', 'suggest', 'edit'),
      defaultValue: 'edit',
      allowNull: false,
    },
    ownerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'owner ID must be an integer',
        },
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Documents'),
};
