import jwt from 'jsonwebtoken'

export const generarJWT = ( uid: string ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = { uid }

        jwt.sign( payload, process.env.SECRETORPUBLICKEY || '', { expiresIn: '4h' }, ( error, token ) => {
            
            if( error ) {
            
                console.log( error )
                reject( 'No se puede generar el token' )
            
            } else {
            
                resolve( token )
            
            }

        } )

    } )

}