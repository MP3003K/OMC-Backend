"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('bjtd5ucjevvqsjgw7cvh', 'ub20zp0yqq4rpl3h', 'tBgM0K3fG2av2QLTzfIe', {
    host: 'bjtd5ucjevvqsjgw7cvh-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map