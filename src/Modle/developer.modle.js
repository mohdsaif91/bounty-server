module.exports = (sequelize, Sequelize) => {
  const developer = sequelize.define("developer", {
    developer_Id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    created_At: {
      type: Sequelize.DATE,
    },
    userName: {
      type: Sequelize.STRING,
    },
    discord_UserName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    github_UserName: {
      type: Sequelize.STRING,
    },
    link: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
  });
  return developer;
};
