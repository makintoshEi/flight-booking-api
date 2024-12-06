import { DataTypes, Sequelize } from 'sequelize';
import { IUser, ModelFactory } from '../interfaces';

const UserModel: ModelFactory = (sequelize: Sequelize) => {
    return sequelize.define<IUser>('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'user_id'
        },
        username: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
            validate: {
                len: [3, 50]
            }
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        tableName: 'users',
        underscored: true
    });
};

export default UserModel;