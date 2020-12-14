const express = require("express");
const mysql = require("mysql")
const app = express();
const path = require('path');
const logger = require('morgan')


app.set('views', path.join(__dirname, 'server/views'));
// vælg html format der skal vises
app.set('view engine', 'ejs');
// peg på hvilken stig css/img skal læses
app.use(express.static('./public'));

app.use(logger('dev', {
    // hvis ALLE requests skal ses i loggen, udkommenter næste linje
    skip: req => (!req.url.endsWith(".html") && req.url.indexOf('.') > -1)
 }));
 
  
// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "andelsforeningen"
})

// connect to mysql
db.connect(err => {
    if (err) {
        throw err
    }
    console.log("mysql connected");
})


app.get("/", (req, res)=>{
    res.render("index")
})


// create database
// app.get("/", (req, res) => {
//     // let sql = `CREATE DATABASE andelsforeningen`
//     // db.query(sql, err => {
//     //     if (err) {
//     //         throw err
//     //     }
//     res.sendFile(path.join(__dirname, './index.html'));
//     })
// // })

// // create table
// app.get('/createEmployee', (req, res) => {
//     let sql = `CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))`
//     db.query(sql, err => {
//         if (err) {
//             throw err
//         }
//         res.send("Employee table created")
//     })
// })

// // insert employee
// app.get("/employee1", (req, res) => {
//     let post = { name: "John Doe", description: "Why always my me"}
//     let sql = `INSERT INTO employee SET ?`
//     let query = db.query(sql, post, err => {
//         if (err) {
//             throw err
//         }
//         res.send("Employee added")
//     })
// })

// // select employee
// app.get("/getEmployee", (req, res) => {
//     let sql = `SELECT * FROM employee`
//     let query = db.query(sql, (err, result) =>{
//         if (err) {
//             throw err
//         }
//         console.log(result);
//         res.send(result)
//     })

// })

// // update employee
// app.get("/updateEmployee/:id", (req, res) =>{
//     let newName = "updated name"
//     let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`
//     let query = db.query(sql, err => {
//         if(err){
//             throw err
//         }
//         res.send("employee name updated")
//     })
// })

// delete employee
// app.get("/deleteEmployee/:id", (req, res) =>{
//     let sql = `DELETE FROM employee WHERE id = ${req.params.id}`
//     let query = db.query(sql, err =>{
//         if(err){
//             throw err
//         }
//         res.send("employee deleted")
//     }) 
// })

app.listen(3000, () => {
    console.log("Server started on 3000");
})