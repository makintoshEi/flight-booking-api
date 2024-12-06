import { initializeDatabase } from './'

/**
 * Singleton class to manage the database connection
 */
export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private db: any;

    private constructor() {
        this.db = initializeDatabase();
    }

    static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            console.log('Creating a new instance of DatabaseConnection');
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    getDb(): Promise<any> {
        return this.db;
    }
}
