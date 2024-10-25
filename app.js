/*const express = require('express');
const mysql = require('mysql2');


const app = express();

const connection = mysql.createConnection({
    host: "mysql2",
    user: 'root',
    password: 'secret',
    database: 'testdb'
});
connection.connect()

connection.query(`CREATE TABLE IF NOT EXISTS daten (
    id INT AUTO_INCREMENT PRIMARY KEY,
    logEintrag VARCHAR(255)
    
)`)


    
app.get('/add', (req, res) => { 
    
    connection.query(`INSERT INTO daten (logEintrag) VALUES ("Eintrag am ${new Date()}")`);
    
    res.send('Eintrag gespeichert')     
});



app.get('/all', (req, res) => {
    connection.query(`SELECT * FROM daten `, (err, results) => {
    if (err){
        res.status(500).send("Fehler beim laden der Tabelle")
        return

    }
    res.json(results)

    })    
})


app.listen(5012, () => {
    console.log('Server lauscht auf Port 5012')
})    
*/



const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'testdb',
  
});

connection.connect();

connection.query(`CREATE TABLE IF NOT EXISTS test (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
)`);
app.get('/add', (req, res) => {
  connection.query(
    `INSERT INTO test (name) VALUES ('${new Date().toLocaleString()}')`
  );
  res.send("Added!!!");
});

app.get('/all', (req, res) => {
    connection.query(`SELECT * FROM test `, (err, results) => {
    if (err){
        res.status(500).send("Fehler beim laden der Tabelle")
        return

    }
    res.json(results)

    })    
})


const PORT = process.env.PORT || 5012;

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});