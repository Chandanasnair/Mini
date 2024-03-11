const mysql = require('mysql2');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Bhagya@55',
    database: 'farm',
    port: 3306

});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async validateUser(username, password) {
        
      try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM login WHERE username = ? AND password = ?";

            connection.query(query, [username, password], (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results[0]);
            })
        });
        console.log(response);
        return response;
      } 
    catch (error) {
        console.log(error);
    }
}

async registerUser(username,email, password,confirm_password) {
    
  try {
    const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM register WHERE USERNAME = ? email= ? AND PASSWORD = ? and confirm_password = ?";

        connection.query(query, [username,email, password,confirm_password], (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results[0]);
        })
    });
    console.log(response);
    return response;
  } 
catch (error) {
    console.log(error);
}
}
}

module.exports = DbService;