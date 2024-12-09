import { Sequelize } from 'sequelize';
import { readdirSync } from 'fs';
import { join } from 'path';
import { ModelFactory } from '../interfaces';

// Dynamic model loader and aggregator
function initModels(sequelize: Sequelize) {
    const db: any = {
        sequelize,
        Sequelize
    };

    // Dynamically load model files
    readdirSync(__dirname)
        .filter(file =>
            file.indexOf('.') !== 0 &&
            !['index.ts', 'relationships.ts'].includes(file) &&
            (file.endsWith('.ts') || file.endsWith('.js'))
        )
        .forEach(file => {
            const modelModule = require(join(__dirname, file));
            const modelFactory: ModelFactory = modelModule.default;
            if (modelFactory) {
                const model = modelFactory(sequelize);
                db[model.name] = model;
            }
        });

    // Run associations if defined
    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    return db;
}

export default initModels;