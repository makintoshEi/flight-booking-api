import { DataTypes, Sequelize } from 'sequelize';
import { IBooking, ModelFactory } from '../interfaces';

const BookingModel: ModelFactory = (sequelize: Sequelize) => {
    return sequelize.define<IBooking>('Booking', {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'booking_id'
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
        },
        flight_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'flight_id'
        },
        total_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        booking_status: {
            type: DataTypes.ENUM('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'),
            allowNull: false
        }
    }, {
        tableName: 'bookings',
        underscored: true
    });
};

export default BookingModel;
