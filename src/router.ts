import { Router } from 'express'
import { body, param } from 'express-validator'
import { handleInputErrors } from './middleware'
import {createUser, deleteUser, getUserById, getUsers, updateUser} from "./handlers/user";
import {createMateria, deleteMateria, getMateriaById, getMaterias, updateMateria} from "./handlers/materia";
import {createMaterial} from "./handlers/materialDidactico";


const router = Router()

router.get('/',(req,res) => {
    res.json('Desde GET')
})

//******************************************************* Router Usuario**********************************************//
//GET

//Obten a todos los usuarios
router.get('/user/getAll', getUsers)

//obten usuario especifico
router.get('/user/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getUserById
)

// POST

//Crear usuario
router.post('/user/create', createUser)

// PUT
// Actualizar Usuario
router.put('/user/:id',
    param('id').isInt().withMessage('ID no válido'),
    body('nombre')
        .notEmpty().withMessage('El nombre de Usuario no puede ir vacio'),
    body('password')
        .notEmpty().withMessage('La contraseña no puede ir vacia'),
    body('rol')
        .notEmpty().withMessage('El rol no puede ir vacio'),
    handleInputErrors,
    updateUser
)

// DELETE
// Borrar Usuario
router.delete('/user/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteUser
)


//******************************************************* Router Materia************************************************
// GET

// Obtener todas las materias
router.get('/materia/getAll', getMaterias)

// Obten materia especifico
router.get('/materia/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getMateriaById
)

// POST
router.post('/materia/create', createMateria) //Insertar materia

// PUT
router.put('/materia/:id',
    param('id').isInt().withMessage('ID no válido'),
    body('titulo')
        .notEmpty().withMessage('El nombre de Usuario no puede ir vacio'),
    body('descripcion')
        .notEmpty().withMessage('La contraseña no puede ir vacia'),
    handleInputErrors,
    updateMateria
)

// DELETE

// Borrar Materia
router.delete('/materia/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteMateria
)

//******************************************** Router Material Didactico************************************************
router.post('/materialDidactico/create', createMaterial) //Insertar material Didactico

export default router