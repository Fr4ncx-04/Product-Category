const mysql = require('mysql');

//conexion a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product_category'
});

//Conectar a la base de datos
db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log('conectado a la base de datos')
})

module.exports = db;