import { Sequelize } from "sequelize";

export const setupRelationships = (sequelize: Sequelize) => {
    const { User, Flight, Booking, PassengerMaster, BookingPassenger, Payment } = sequelize.models;

    // User to Bookings (One-to-Many)
    User.hasMany(Booking, {
        foreignKey: { name: 'user_id', field: 'user_id' },
        as: 'bookings'
    });
    Booking.belongsTo(User, {
        foreignKey: { name: 'user_id', field: 'user_id' },
        as: 'user'
    });

    // Flight to Bookings (One-to-Many)
    Flight.hasMany(Booking, {
        foreignKey: { name: 'flight_id', field: 'flight_id' },
        as: 'bookings'
    });
    Booking.belongsTo(Flight, {
        foreignKey: { name: 'flight_id', field: 'flight_id' },
        as: 'flight'
    });

    // Booking to BookingPassengers (One-to-Many)
    Booking.belongsToMany(PassengerMaster, {
        through: BookingPassenger,
        foreignKey: { name: 'booking_id', field: 'booking_id' },
        as: 'passengers'
    });

    // PassengerMaster to BookingPassengers (One-to-Many)
    PassengerMaster.belongsToMany(Booking, {
        through: BookingPassenger,
        foreignKey: { name: 'passenger_id', field: 'passenger_id' },
        as: 'bookings'
    });

    // Booking to Payment (One-to-One)
    Booking.hasOne(Payment, {
        foreignKey: { name: 'booking_id', field: 'booking_id' },
        as: 'payment'
    });
    Payment.belongsTo(Booking, {
        foreignKey: { name: 'booking_id', field: 'booking_id' },
        as: 'booking'
    });
};