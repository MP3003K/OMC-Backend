import { Sequelize } from 'sequelize'

const db = new Sequelize('bzt73epcfgoa9d7l57nd', 'upgkcuvtboluyx3v', 'ysQE3KEa56zSNw88wrr0', {
    host: 'bzt73epcfgoa9d7l57nd-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    //logging: false
})

export default db