import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import Usuario from '../models/usuario'

export const validarJWT = async ( req: Request | any, res: Response, next: Function ) => {

    const token = req.header("x-token")

    if( !token ) {
        return res.status(401).json({ msg: 'No hay token la petición' })
    }

    try {

        const { uid } : any = jwt.verify( token, process.env.SECRETORPUBLICKEY || '' )

        // obtenemos el usuario
        const usuario = await Usuario.findByPk( uid )

        if( !usuario ) {
            return res.json({ msg: 'Token no valido - usuario no existe en BD' })
        }

        // se lo pasmos por la request
        req.usuario = usuario

        next()

    } catch( error) {
        
        console.log( error )
        res.status(401).json({ msg: 'Token no valido' })

    }

}