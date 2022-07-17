"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('bdomc', 'admin', 'Contrasena3003', {
    host: 'database-mijail.cbgsn3d1haym.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map