import { DataTypes, Sequelize } from 'sequelize';
import { IPassengerMaster, ModelFactory } from '../interfaces';

const PassengerMasterModel: ModelFactory = (sequelize: Sequelize) => {
    return sequelize.define<IPassengerMaster>('PassengerMaster', {
      passenger_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'passenger_id'
      },
      first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        validate: {
          isEmail: true
        }
      },
      date_of_birth: {
        type: DataTypes.DATEONLY
      },
      passport_number: {
        type: DataTypes.STRING(20),
        unique: true
      },
      phone_number: {
        type: DataTypes.STRING(20)
      },
      nationality: {
        type: DataTypes.STRING(50)
      },
      gender: {
        type: DataTypes.STRING(10)
      }
    }, {
      tableName: 'passengers_master',
      underscored: true
    });
  };

export default PassengerMasterModel;
