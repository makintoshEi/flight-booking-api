import { DataTypes, Sequelize } from 'sequelize';
import { IPayment, ModelFactory } from '../interfaces';

const PaymentModel: ModelFactory = (sequelize: Sequelize) => {
    return sequelize.define<IPayment>('Payment', {
        payment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'payment_id'
        },
        booking_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'booking_id'
        },
        payment_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        payment_method: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        payment_status: {
            type: DataTypes.ENUM('PENDING', 'SUCCESSFUL', 'FAILED', 'REFUNDED'),
            allowNull: false
        },
        transaction_id: {
            type: DataTypes.STRING(100),
            unique: true
        }
    }, {
        tableName: 'payments',
        underscored: true
    });
};

export default PaymentModel;
