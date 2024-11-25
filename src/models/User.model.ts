import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'usuario'
})

class User extends Model {
    @Column({
        type: DataType.STRING
    })
    declare nombre: string

    @Column({
        type: DataType.STRING(100)
    })
    declare email: string

    @Column({
        type: DataType.STRING(100)
    })
    declare password: string

    @Column({
        type: DataType.STRING(100)
    })
    declare rol: string
}

export default User