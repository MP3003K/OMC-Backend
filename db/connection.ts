import { Sequelize } from 'sequelize'

const db = new Sequelize(
    'bd_omc', 
    'admin', 
    '201711882', 
    {
        host: 'database-omc.c44ldp4tqelu.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        //logging: false
    }
)

export default db