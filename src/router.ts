import { Router } from 'express'
import { body, param } from 'express-validator'
import { handleInputErrors } from './middleware'
import {createUser, getUsers, test} from "./handlers/user";
import {createMateria} from "./handlers/materia";
import {createMaterial} from "./handlers/materialDidactico";


const router = Router()

router.get('/',(req,res) => {
    res.json('Desde GET')
})

//******************************************************* Router Usuario************************************************
router.get('/user/test', test)
router.post('/user/create', createUser)
router.get('/user/getAll', getUsers)
/*router.get('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductById
)*/





/*
router.post('/', 
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createProduct
)

router.put('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido'),
    handleInputErrors,
    updateProduct
)

router.patch('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateAvailability
)

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteProduct
)
*/

//******************************************************* Router Materia************************************************
router.post('/materia/create', createMateria) //Insertar materia

//******************************************** Router Material Didactico************************************************
router.post('/materialDidactico/create', createMaterial) //Insertar material Didactico

export default router