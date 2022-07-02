module.exports = (sequelize, DataTypes) => {
      const User = sequelize.define('User', {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            email: {type: DataTypes.STRING, unique: true, isLowercase: true, allowNull: false},
            password: { type: DataTypes.STRING, allowNull: false },
            token : { type: DataTypes.STRING}
      });
    
    return User;
}

