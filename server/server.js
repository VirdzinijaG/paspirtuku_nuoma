const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs123456',
    database: 'kolt_scooters'
})

con.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Prisijungta!!');
})


// Iraso nauja posta

app.post('/scooters', (req, res) => {
    console.log(req.body.title)
    const sql = `
        INSERT INTO scooters
        (registration_code, last_use_time, total_ride_kilometres)
        VALUES (?, ?, ?)
        `;
    con.query(sql, [req.body.registration_code, req.body.last_use_time, req.body.total_ride_kilometres], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

// Trina posta

app.delete('/scooters/:id', (req, res) => {
    const sql = `
        DELETE FROM scooters
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

//Redagavimas

app.put('/scooters/:id', (req, res) => {
    const sql = `
        UPDATE scooters
        SET last_use_time = ?, total_ride_kilometres = ? 
        WHERE id = ?
        `;
    con.query(sql, [req.body.last_use_time, req.body.total_ride_kilometres, req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


// rodo visus paspirtukus
app.get('/scooters', (req, res) => {
    con.query('SELECT * FROM scooters', (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    })
})






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})