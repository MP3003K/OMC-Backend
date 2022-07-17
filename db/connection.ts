import { Sequelize } from 'sequelize'

const db = new Sequelize(
    'bjtd5ucjevvqsjgw7cvh', 
    'ub20zp0yqq4rpl3h', 
    'tBgM0K3fG2av2QLTzfIe', 
    {
        host: 'bjtd5ucjevvqsjgw7cvh-mysql.services.clever-cloud.com',
        dialect: 'mysql',
        //logging: false
    }
)

export default db