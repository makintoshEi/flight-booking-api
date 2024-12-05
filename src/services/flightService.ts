import { FlightBookingRequest } from '../types';
import { FLIGHTS } from '../data/mockData';

export default class FlightService {

    static getReservationTotal = (booking: FlightBookingRequest): number => {
        const flights = FLIGHTS.filter((f) => f.id === booking.departFlightInfo?.id || f.id === booking.returnFlightInfo?.id);
        if (!flights) {
            return 0;
        }
        let total = 0;
        for (const flight of flights) {
            total += +flight.flightCost;
        }
        return total * booking.passengersNumber;
    }

    static bookIt = (bookingInfo: FlightBookingRequest): boolean => {
        // save to NoSQL database
        console.log(bookingInfo);
        return true
    }
}
