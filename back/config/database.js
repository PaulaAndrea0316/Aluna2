const mongoose = require("mongoose");

const connectDatabase = async () => {
    console.log(process.env.DB_LOCAL_URI)
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro la conexion con la base de datos`)
    })
   
}

module.exports = connectDatabase;