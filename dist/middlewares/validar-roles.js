"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tieneRole = exports.esAdminRol = void 0;
const esAdminRol = (req, res, next) => {
    if (!req.usuario) {
        return res.status(500).json({ msg: 'Se quiere verificar sin validar el token primero' });
    }
    const { role, nombre } = req.usuario;
    if (role != "ROLE_ADMIN") {
        return res.status(401).json({ msg: 'Este usuario ' + nombre + ' no es admin' });
    }
    next();
};
exports.esAdminRol = esAdminRol;
const tieneRole = (...roles) => {
    return (req, res, next) => {
        console.log(roles);
        if (!roles.includes(req.usuario.role)) {
            return res.status(401).json({ msg: `El servicio requiere uno de estos roles ${roles}` });
        }
        next();
    };
};
exports.tieneRole = tieneRole;
//# sourceMappingURL=validar-roles.js.map