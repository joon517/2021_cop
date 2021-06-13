const mariadb = require('mariadb')

//TODO procces.env처리
const pool = mariadb.createPool({
    host:"fastmvpcoptemp.clwoq4w3amdc.us-east-2.rds.amazonaws.com",
    user:"admin",
    port:3306,
    database:"tmp",
    password:"210504cop!"
})

const makeTable = () => {
    pool.getConnection()
    .then(conn => {
        conn.query(
            `
            DROP TABLE IF EXISTS BoardInfo;
            CREATE TABLE BoardInfo
            (
                user_id int(11) not null primary key,
                titles varchar(20) not null,
                content text(2000) not null,
                username varchar(20) not null,
                uploadDate varchar(20) not null,
                likes int(11) not null
            );
            SELECT * FROM BoardInfo;
            `
        )
        .catch(err => {
            console.error(err)
            // TODO res 함수 파라미터에 추가
            // res.send("Create BoardInfo table error")
            conn.end()
        })
        .then( conn.end());
    })
    .catch(err => {
        console.error(err)
    })

    return;
}
const DBConnect = () => {
    pool.getConnection()
    .then(conn => {
        console.log("connection try")
        console.log("Connection Success")
        console.log(conn)
        conn.query(`show grants for admin;`)
            .then(rows => {
                console.log(rows)
                conn.end()
            })
            .catch(err => {
                console.error(err)
                conn.release()
            })
    })
    .catch(err => {
        console.error(err)
    })
    return;
}

