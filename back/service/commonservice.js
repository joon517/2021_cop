const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host:"fastmvpcoptemp.clwoq4w3amdc.us-east-2.rds.amazonaws.com",
    user:"ywkim",
    port:3306,
    password:"210504cop!",
    database:"fastmvpcoptemp",
})

const DBConnect = () => {
    console.log("sdf")
    pool.getConnection()
    .then(conn => {
        console.log("connection try")
        console.log("Connection Success")
        console.log(conn)
        .then(rows =>
            console.log(rows))
        .then(res => {
            conn.release()
        })
        .catch(res => {
            conn.release()
        })
    })
    .catch(err => {
        console.error(err)
    })
}


DBConnect()