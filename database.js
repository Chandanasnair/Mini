const mysql = require('mysql');

const con = new mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Bhagya@55',
    database : 'farm'
});

const connectDB = async () => {
    con.connect(function (err) {
        if(err) {
            console.error('Error connecting to database: ', err.stack);
            process.exit(1);
        }
        console.log('Connection established with ID: ', con.threadId);
        return con;
    });
}

const endConnection = async () => {
    con.end((err) => {
        if(err) {
            console.error('Error while closing connection: ', err.stack);
            process.exit(1);
        }
        console.log('Connection Closed Successfully!');
        return con;
    });
}

module.exports = {connectDB, endConnection};