import Sequelize, { Model } from 'sequelize';

class ModelBase extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        // Some basic data examples
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        connected: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
      },
      {
        sequelize,
        freezeTableName: true
      }
    );
    return this;
  }
}
export default ModelBase;
