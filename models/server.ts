import express, { Application } from 'express'
import cors from 'cors'

import userRoutes from '../routes/usuario'
import authRoutes from '../routes/auth'

import db from '../db/connection'

class Server {

    private app: Application
    private port: string
    private apiPaths = {
        usuarios: '/api/usuarios',
        auth: '/api/auth'
    }

    constructor ( ) {
        this.app  = express( );
        this.port = process.env.PORT || '8080'
        
        this.dbConnection( )
        this.middlewares( )
        this.routes( )
        
    }

    async dbConnection( ) {
    
        try {
            
            await db.authenticate()
            console.log('DB OK!!')

        } catch( error ) {
            
            throw new Error(error)            
        
        }
    
    }

    middlewares( ) {
        this.app.use( cors( ) )
        this.app.use( express.json( ) )
        this.app.use( express.static('public') )
    }

    routes( ) {
        this.app.use( this.apiPaths.auth, authRoutes )
        this.app.use( this.apiPaths.usuarios, userRoutes )
    }

    listen( ) {
        this.app.listen( this.port, ( ) => {
            console.log('Servidor corriendo en el puerto ' + this.port )
        })
    }

}

export default Server