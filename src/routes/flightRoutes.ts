import { Router } from 'express';
import { FlightController } from '../controllers/flightController';

const router = Router();

// GET /city-and-airport
router.get('/city-and-airport', FlightController.getCitiesAndAirports);

// GET /search/:pathParam1/:pathParam2
// router.get('/search/:iataOrigin/:iataDestiny', FlightController.searchFlights);

// POST /confirmation
router.post('/confirmation', FlightController.confirmReservation);

// POST /booking
router.post('/booking', FlightController.bookFlight);

export default router;