import { Request, Response } from "express"

export const esAdminRol = ( req: Request | any, res: Response, next: Function ) => {

    if( !req.usuario ) {
        return res.status(500).json({ msg: 'Se quiere verificar sin validar el token primero' })
    }
    
    const { role, nombre } = req.usuario    
    
    if( role != "ROLE_ADMIN" ) {
        return res.status(401).json({ msg: 'Este usuario ' + nombre + ' no es admin' })
    }     

    next( )

}

export const tieneRole = ( ...roles: string[] ) => {

    return (req: Request | any, res: Response, next: Function) => {

        console.log(roles)

        if ( !roles.includes( req.usuario.role ) ) {
            return res.status(401).json({ msg: `El servicio requiere uno de estos roles ${roles}` })
        }
        
        next()
        
    }

}