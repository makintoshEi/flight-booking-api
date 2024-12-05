type CountryType = {
    key: string;
    value: string;
}

type FlightInfoType = {
    arrivedHour: string;
    destinyIata: string;
    durationTime: string;
    id: string;
    isSelected: boolean;
    operator: 'avianca' | 'jetsmart' | '';
    originIata: string;
    takeOffHour: string;
    flightCost: string;
}

type FlightSearchResponse = {
    flights: FlightInfoType[];
}

type FlightConfirmationResponse = {
    totalAmount: number;
}

type FlightBookingResponse = {
    bookingStatus: 'success' | 'error';
    message: string;
}

type PassengerType = {
    birthDate: string;
    gender: 'O' | 'M' | 'F';
    lastname: string;
    nacionality: string;
    name: string;
    withLuggage: boolean;
}

type PrincipalType = {
    email: string;
    phoneNumber: string;
}

type TripWay = 'oneway' | 'roundtrip'

type FlightBookingRequest = {
    departDate: Date | null;
    destiny: CountryType;
    departFlightInfo?: FlightInfoType;
    returnFlightInfo?: FlightInfoType;
    origin: CountryType;
    passengersNumber: number;
    passengers?: PassengerType[];
    paypalTransactionID?: string;
    principal?: PrincipalType;
    returnDate: Date | null;
    tripWay: TripWay;
}

export type {
    CountryType,
    FlightBookingResponse,
    FlightBookingRequest,
    FlightConfirmationResponse,
    FlightInfoType,
    FlightSearchResponse
}
