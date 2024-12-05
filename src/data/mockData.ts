import { CountryType, FlightInfoType } from '../types';

export const COUNTRIES: CountryType[] = [
    { key: 'BR', value: 'Brazil' },
    { key: 'AR', value: 'Argentina' },
    { key: 'CL', value: 'Chile' },
    { key: 'CO', value: 'Colombia' },
    { key: 'PE', value: 'Peru' }
];

export const FLIGHTS: FlightInfoType[] = [
    {
        id: 'FL001',
        originIata: 'BR',
        destinyIata: 'CO',
        takeOffHour: '08:00',
        arrivedHour: '10:30',
        durationTime: '2h 30m',
        operator: 'avianca',
        isSelected: false,
        flightCost: '250.00'
    },
    {
        id: 'FL002',
        originIata: 'CO',
        destinyIata: 'BR',
        takeOffHour: '12:45',
        arrivedHour: '14:15',
        durationTime: '1h 30m',
        operator: 'jetsmart',
        isSelected: false,
        flightCost: '180.50'
    }
];
