import { DatabaseConnection } from "../database/database-connection";
import { IFlight } from "../interfaces";

class FlightRepository {
    private flightModel: any;

    constructor() {
        DatabaseConnection.getInstance()
            .getDb()
            .then(models => this.flightModel = models.Flight);
    }

    async searchFlightsByOriginAndDestination(origin: string, destination: string): Promise<IFlight[] | null> {
        const flights = await this.flightModel.findAll({
            where: { departure_airport: origin, arrival_airport: destination }
        });
        return flights.length > 0 ? flights : null;
    }
}

export default new FlightRepository();