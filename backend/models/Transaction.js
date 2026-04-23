const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       required:
 *         - userId
 *         - type
 *         - category
 *         - amount
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: The auto-generated id of the transaction
 *         userId:
 *           type: string
 *           format: uuid
 *           description: The id of the user who made the transaction
 *         type:
 *           type: string
 *           enum: [income, expense]
 *           description: The type of transaction
 *         category:
 *           type: string
 *           description: The category of the transaction
 *         amount:
 *           type: number
 *           format: float
 *           description: The transaction amount
 *         description:
 *           type: string
 *           description: Optional description of the transaction
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the transaction was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the transaction was last updated
 */
const Transaction = sequelize.define('Transaction', {
    id: { 
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true 
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    type: {
        type: DataTypes.ENUM('income', 'expense'),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
}, { timestamps: true });


Transaction.belongsTo(User, { foreignKey: 'userId' });

module.exports = Transaction;