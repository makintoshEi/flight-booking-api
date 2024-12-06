import { Model, ModelStatic } from 'sequelize';

// Generic model interface
export interface IModel extends Model {
    id?: number;
}

// Model factory type
export type ModelFactory = (sequelize: any) => ModelStatic<IModel>;

// User interface
export interface IUser extends IModel {
    username: string;
    email: string;
    password_hash: string;
}

// Flight interface
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
