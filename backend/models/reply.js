module.exports = (sequelize, DataTypes) => {
    const Reply = sequelize.define('Reply', {
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
            content: { type: DataTypes.STRING, allowNull: false },
            imageUrl: {type: DataTypes.STRING, allowNull: false}
      });
    return Reply;
}