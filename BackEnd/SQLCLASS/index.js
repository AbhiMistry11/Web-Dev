const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Hail_app',
  password : 'Abhi@369'
});

try{
    connection.query("SHOW TABLES", (err,result)=>{
        if(err) throw err;
        console.log(result);
    })
}catch(e){
    console.log(e);
}

connection.end();

let createRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(createRandomUser());