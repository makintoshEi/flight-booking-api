import { DataTypes, Sequelize } from 'sequelize';
import { IBookingPassenger, ModelFactory } from '../interfaces';

const BookingPassengerModel: ModelFactory = (sequelize: Sequelize) => {
    return sequelize.define<IBookingPassenger>('BookingPassenger', {
        booking_passenger_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'booking_passenger_id'
        },
        booking_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'booking_id'
        },
        passenger_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'passenger_id'
        },
        seat_number: {
            type: DataTypes.STRING(10)
        },
        special_requests: {
            type: DataTypes.TEXT
        },
        baggage_allowance: {
            type: DataTypes.INTEGER
        },
        meal_preference: {
            type: DataTypes.STRING(50)
        }
    }, {
        tableName: 'booking_passengers',
        underscored: true
    });
};

export { BookingPassengerModel }
