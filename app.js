const express = require('express');
const dotenv = require('dotenv');
const dbService = require('./dbService.js')
const app = express();
const cors = require('cors');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// Login route
app.get('/login/:username/:password', (req, res) => {
    const { username, password } = req.params;
    const db = dbService.getDbServiceInstance();
    const result = db. validateUser(username,password);
    result.then(data=>res.json({data:data}))
    .catch(err=>console.log(err));
});

app.get('/register/:name/:email/:password', (req, res) => {
    const { name, email, password } = req.params;
    const db = dbService.getDbServiceInstance();
    const result = db. validateUser(name,email,password);
    result.then(data=>res.json({data:data}))
    .catch(err=>console.log(err));
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});