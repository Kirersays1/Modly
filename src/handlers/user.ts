import { Request, Response } from 'express'
import User from '../models/User.model'
import {check, validationResult} from 'express-validator'
import colors from "colors";

export const test = async (req: Request, res: Response) => {
   console.log(colors.green('Recibi la peticion test GET'))
    res.json('Enviado correctamente')
}

export const createUser = async (req: Request, res: Response) => {
    try {


        //Validar los campos de la peticion
        await check('nombre').notEmpty().withMessage('El campo nombre no puede ir vacio').run(req)
        await check('email').notEmpty().withMessage('El campo email no puede ir vacio').run(req)
        await check('password').notEmpty().withMessage('El campo password no puede ir vacio').run(req)
        await check('rol').notEmpty().withMessage('El campo rol no puede ir vacio').run(req)


        let errors = validationResult(req)

        if (!errors.isEmpty()) {

            //Mostrar en consola que hubo un error
            console.log(colors.red('ERROR AL CREAR USUARIO'))

            //Regresar peticion con array de errores (error 400)
            return res.status(400).json({errors: errors.array()})

        }

        //Mostrar en consola los datos recibidos
        console.log(colors.blue(req.body))


        const user = await User.create(req.body)
        res.json({data: user})
    } catch (error) {
        console.log(colors.red(error))
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        console.log(colors.blue("Solicitaron a todos los usuarios"))
        const products = await User.findAll({
            order: [
                ['id_usuario', 'DESC']
            ]
        })
        res.json({data: products})
    } catch (error) {
        console.log(error)
    }
}


export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await User.findByPk(id)

        if(!product) {
            return res.status(404).json({
                error: 'Producto No Encontrado'
            })
        }

        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}
/*

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }
    
    // Actualizar
    await product.update(req.body)
    await product.save()
    res.json({data: product})
}

export const updateAvailability = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }
    
    // Actualizar
    product.availability = !product.dataValues.availability
    await product.save()
    res.json({data: product})
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }
    
    await product.destroy()
    res.json({data: 'Producto Eliminado'})
}*/