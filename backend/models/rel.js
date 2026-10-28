const Motorista = require('./Motorista')
const Funcionario = require('./Funcionario')
const Carga = require('./Carga')
const Entrega = require('./Entrega')

Entrega.hasMany(Carga, {
 foreignKey: 'idCarga',
 as: 'cargaEntrega',
 onDelete: 'CASCADE'
})

Carga.belongsTo(Entrega, {
    foreignKey: 'idCarga',
     as: 'EntregaCarga',
     allowNull: false
     })

Entrega.hasMany(Funcionario, {
    foreignKey: 'idFuncionario',
    as: 'funcionarioEntrega',
    onDelete: 'CASCADE'
})

Funcionario.belongsTo(Entrega, {
    foreignKey: 'idFuncionario',
    as: 'EntregaFuncionario',
    allowNull: false
})

Entrega.hasMany(Motorista, {
    foreignKey: 'idMotorista',
    as: 'motoristaEntrega',
    onDelete: 'CACADE'
})

Motorista.belongsTo(Entrega, {
    foreignKey: 'idMotorista',
    as: 'entregaMotorista',
    allowNull: false
})

module.exports = { Entrega, Motorista, Funcionario , Carga }