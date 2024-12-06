const config = {
    development: {
        database: 'dev_db',
        logging: true
    },
    production: {
        database: 'prod_db',
        logging: false
    }
}

export default config[process.env.NODE_ENV || 'development'];
