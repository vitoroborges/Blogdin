import {Sequelize} from 'sequelize-typescript'

const connection = new Sequelize('blogdin', 'root', 'C.oxinha4321', {
    host: "localhost",
    dialect: 'mysql',
    timezone: "-03:00"
})

export default connection
