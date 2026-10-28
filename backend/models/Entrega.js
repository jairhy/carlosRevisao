const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entregas', {
    codEntregas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    codCarga: {
        type: DataTypes.INTEGER,
        references: {
            key: 'idCarga',
            model: 'cargas'
        },
        codFuncionario: {
            type: DataTypes.INTEGER,  
            references: {
                key: 'idFuncionario',
                model: 'funcionarios'
            } 
        },
        codMotorista: {
            type: DataTypes.INTEGER,
            references: {
                key: 'idMotorista',
                model: 'funcionarios'
            }
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cnh: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING(100),
            allowNull: false
        }

    }
},{
    timestamps: false,
    tableName: 'entregas'
})

module.exports = Entrega