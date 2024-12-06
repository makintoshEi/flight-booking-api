import { sequelize, testConnection } from './config';
import initModels from '../models';

async function initializeDatabase() {
    try {
        await testConnection();
        const models = initModels(sequelize);
        if (process.env.NODE_ENV === 'development') {
            await sequelize.sync({
                force: false,  // Don't drop existing tables
                alter: true    // Alter tables to match model definitions
            });
            console.log('Database models synchronized');
        }
        return models;
    } catch (error) {
        console.error('Database initialization failed:', error);
        throw error;
    }
}

export { initializeDatabase };