module.exports = (sequelize, DataTypes) => {
    const Topics = sequelize.define('Topic', {
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
            title: {type: DataTypes.STRING, allowNull:false},
            content: { type: DataTypes.STRING, allowNull: false },
            imageUrl: {type: DataTypes.STRING}
      });
    return Topics;
}