import { Request, Response } from 'express';
import { COUNTRIES, FLIGHTS } from '../data/mockData';
import {
    FlightSearchResponse,
    FlightBookingResponse,
    FlightInfoType,
    FlightConfirmationResponse
} from '../types';
import flightService from '../services/flightService'

export class FlightController {
    // GET /city-and-airport
    static getCitiesAndAirports(req: Request, res: Response): void {
        try {
            res.json(COUNTRIES);
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'Unable to fetch countries'
            });
        }
    }

    // GET /search
    static searchFlights(req: Request, res: Response): void {
        const { iataOrigin, iataDestiny } = req.params;

        try {
            const filteredFlights: FlightInfoType[] = FLIGHTS.filter(flight =>
                flight.originIata === iataOrigin &&
                flight.destinyIata === iataDestiny
            );

            const response: FlightSearchResponse = {
                flights: filteredFlights
            };

            res.json(response);
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'Flight search failed'
            });
        }
    }

    // POST /confirmation
    // TODO: should'nt receive all booking information: just departFlightInfo, returnFlightInfo, passengersNumber
    static confirmReservation(req: Request, res: Response): void {
        try {
            const response: FlightConfirmationResponse = {
                totalAmount: flightService.getReservationTotal(req.body)
            }
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'Reservation confirmation failed'
            });
        }
    }

    // POST /booking
    static bookFlight(req: Request, res: Response): void {
        try {
            const response: FlightBookingResponse = {
                bookingStatus: 'success',
                message: `Flight booked successfully`
            };
            res.json(response);
        } catch (error) {
            const response: FlightBookingResponse = {
                bookingStatus: 'error',
                message: 'Booking failed'
            };

            res.status(500).json({
                status: 'error',
                ...response
            });
        }
    }
}