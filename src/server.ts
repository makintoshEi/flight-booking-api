import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import flightRoutes from './routes/flightRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/flights', flightRoutes);
app.use('/api/v1/users', userRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Flight Booking Backend running on port ${PORT}`);
});