import { Request, Response } from 'express'
import User from '../models/User.model'


export const test = async (req: Request, res: Response) => {
   console.log(req.body)
    res.json('Recibo funcion')
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body)
        res.json({data: user})
    } catch (error) {
        console.log(error)
    }
}

/*export const getUsers = async (req: Request, res: Response) => {
    try {
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

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

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

export const createProduct = async (req : Request, res : Response) => {
    try {
        const product = await Product.create(req.body)
        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}

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