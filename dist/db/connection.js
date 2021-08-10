"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('bzt73epcfgoa9d7l57nd', 'upgkcuvtboluyx3v', 'ysQE3KEa56zSNw88wrr0', {
    host: 'bzt73epcfgoa9d7l57nd-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map