import { DataTypes, Sequelize } from "sequelize";
import { IFlight, ModelFactory } from "../interfaces";

const FlightModel: ModelFactory = (sequelize: Sequelize) => {
    return sequelize.define<IFlight>('Flight', {
        flight_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        flight_number: {
            type: DataTypes.STRING(10),
            unique: true,
            allowNull: false
        },
        departure_airport: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        arrival_airport: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        departure_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        arrival_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total_seats: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        available_seats: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        base_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        airline: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        aircraft_type: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        tableName: 'flights',
        underscored: true
    });
};


export { FlightModel }