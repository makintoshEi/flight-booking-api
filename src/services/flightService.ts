import { FlightBookingRequest, FlightInfoType } from '../types';
import { FLIGHTS } from '../data/mockData';
import flightRepository from '../repositories/flightRepository';

export default class FlightService {

    static getFlightsByOriginAndDestiny = async (origin: string, destination: string): Promise<FlightInfoType[] | null> => {
        const flights = await flightRepository.searchFlightsByOriginAndDestination(origin, destination);
        if (!flights) {
            return null;
        }
        const newFlights: FlightInfoType[] = [];
        for (const flight of flights) {
            newFlights.push({
                id: flight.flight_number,
                originIata: flight.departure_airport,
                destinyIata: flight.arrival_airport,
                takeOffHour: flight.departure_time.toDateString(),
                arrivedHour: flight.arrival_time.toDateString(),
                durationTime: '',
                operator: flight.airline,
                isSelected: false,
                flightCost: flight.base_price.toString()
            });
        }
        return newFlights;
    }

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
