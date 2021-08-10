import { Request, Response } from 'express'

import { generarJWT } from '../helpers/generar-jwt'

import Usuario from '../models/usuario'

export const login = async ( req: Request, res: Response ) => {

    const { email, password } = req.body

    try {
        
        // verificar si el correo existe
        const usuario : any = await Usuario.findOne({ where: { email } })

        if( !usuario ) {
            return res.status(400).json({msg: 'Usuario / Password no son correctos - email'})
        }
        
        // verificar si el usuario esta activo en la bbdd
        if( !usuario.estado ) {
            return res.status(400).json({msg: 'El usuario esta desactivado !'})
        }
        
        if( password !== usuario.password ) {
            return res.status(400).json({msg: 'La constraseña del usuario no coincide!'})
        }

        // generar el jwt
        const token = await generarJWT( usuario.id )
        
        res.json({
            usuario,
            token
        })

    } catch ( error ) {
        
        res.status(500).json({ msg: 'Oops, algo salió mal!'})

    }

}