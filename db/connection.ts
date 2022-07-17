import { Sequelize } from 'sequelize'

const db = new Sequelize(
    'bdomc', 
    'admin', 
    'Contrasena3003', 
    {
        host: 'database-mijail.cbgsn3d1haym.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        //logging: false
    }
)

export default db