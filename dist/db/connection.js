"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('bd_omc', 'admin', '201711882', {
    host: 'database-omc.c44ldp4tqelu.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map