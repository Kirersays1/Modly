import express from 'express' 
import router  from './router'

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/', router)

export default server