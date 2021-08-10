import { Router } from 'express'

import {
    validarJWT,
    tieneRole
} from '../middlewares/index'

import { 
    deleteUsuario, 
    getUsuario, 
    getUsuarios, 
    postUsuario, 
    putUsuario } from '../controller/usuarios'

const router = Router( )

router.get( '/', 
    validarJWT, 
    //esAdminRol, 
    tieneRole('ADMIN_ROLE', 'INTEGRANTE'), 
    getUsuarios )
router.get( '/:id', getUsuario )
router.post( '/',    postUsuario )
router.put( '/:id', putUsuario )
router.delete( '/:id', deleteUsuario )

export default router