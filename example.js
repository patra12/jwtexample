// connection.query(
//     'INSERT INTO Users(email, password)
//     VALUES ('email1@email.com','123456');',
//     function(error, results, fields){
//         if (error) throw error
//     }
// )
  
models.User.create({
email:'email@email.com',
password:'123456'
}).catch((error)=>{
    if(error) throw error
})