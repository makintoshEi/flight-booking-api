import { Model, ModelStatic } from 'sequelize';

// Generic model interface
export interface IModel extends Model {
    id?: number;
}

// Model factory type
export type ModelFactory = (sequelize: any) => ModelStatic<IModel>;

export interface IUser extends IModel {
    username: string;
    email: string;
    password_hash: string;
}

export interface IFlight extends IModel {
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date;
    arrival_time: Date;
    total_seats: number;
    available_seats: number;
    base_price: number;
    airline: string;
    aircraft_type: string;
}

export interface IBooking extends Model {
    booking_id: number;
    user_id: number;
    flight_id: number;
    total_price: number;
    booking_status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
}

export interface IPassengerMaster extends Model {
    passenger_id: number;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: Date;
    passport_number: string;
    phone_number: string;
    nationality: string;
    gender: string;
}

export interface IBookingPassenger extends Model {
    booking_passenger_id: number;
    booking_id: number;
    passenger_id: number;
    seat_number: string;
    special_requests: string;
    baggage_allowance: number;
    meal_preference: string;
}

export interface IPayment extends Model {
    payment_id: number;
    booking_id: number;
    payment_amount: number;
    payment_method: string;
    payment_status: 'PENDING' | 'SUCCESSFUL' | 'FAILED' | 'REFUNDED';
    transaction_id: string;
}
