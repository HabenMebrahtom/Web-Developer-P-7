module.exports = (sequelize, DataTypes) => {
      const User = sequelize.define('User', {
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
            email: {type: DataTypes.STRING, unique: true, isLowercase: true, allowNull: false},
            password: { type: DataTypes.STRING, allowNull: false },
            token : { type: DataTypes.STRING}
      });
    return User;
}

