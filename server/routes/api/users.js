var POOL = require('../../config').POOL;
var encryption = require('../../config/encryption');
var router = require('express').Router();

router.post('/user/login', function(req, res, next){
  if(!req.body.email){
    return res.status(422).json({errors: {email: "Email is Required For Logging In"}});
  }

  if(!req.body.password){
    return res.status(422).json({errors: {password: "Please Enter Password"}});
  }
  let input=req.body;
  POOL.getConnection(function(err,connection){
    let email=input.email;
    let password=encryption.encrypt(input.password);
    if (err) {
     res.json({"code" : 100, "status":"error","statusMessage" : "Error in connection database"}).status(100);
     connection.release();
     return;
    }   

    console.log('connected as id ' + connection.threadId);

    let queryEmailCheck = `SELECT id FROM USER
        WHERE email=?`
   connection.query(queryEmailCheck,[email],function(err,rows){
      if(err){
         console.log("Error Selecting : %s ",err );
         res.json({error:"error","code" : 100, "status":"error","statusMessage" : "Error in query"}).status(100);
         connection.release();
         return;
      }
      if (rows.length>0) {
        let query = `SELECT id,name,image,email FROM USER
            WHERE email=?  AND password=?`;
            console.log(password)

         connection.query(query,[email,password],function(err,rows){
            if(err){
               console.log("Error Selecting : %s ",err );
               res.json({error:"error","code" : 100, "status":"error","statusMessage" : "Error in query"}).status(100);
               connection.release();
               return;
            }
            if (rows.length>0) {
                  let jsonRet={
                    status:"success",
                    statusMessage:"user logged in",
                    data:rows[0]
                  }
                  res.json(jsonRet).status(200);       
            }else{
                  let jsonRet={
                    status:"error",
                    statusMessage:"incorrect password ",
                    data:rows
                  }
                  res.json(jsonRet).status(200);
            }
         
            // connection.release();
            return;       
                           
         });
      }else{
        let jsonRet={
          status:"error",
          statusMessage:"no such user found",
          data:rows
        }
        res.json(jsonRet).status(200);

      }
      connection.release();        
                     
   });

    connection.on('error', function(err) {      
         res.json({"code" : 100,"status":"error","statusMessage" : "Error in connection database"}).status(100);

         return;     
    });
  });
});

router.post('/user/register', function(req, res, next){
  if(!req.body.email){
    return res.status(422).json({errors: {email: "Email is Required For Logging In"}});
  }

  if(!req.body.password){
    return res.status(422).json({errors: {password: "Please Enter Password"}});
  }

  let input=req.body;

  POOL.getConnection(function(err,connection){
    let email=input.email;
    let password=encryption.encrypt(input.password);
    let name=input.name;
    if (err) {
     res.json({error:"error","code" : 100, "status":"error","statusMessage" : "Error in connection database"}).status(100);
     connection.release();

     return;
    }   

    console.log('connected as id ' + connection.threadId);

    let queryEmailCheck=`SELECT * FROM USER WHERE email=?`;
    connection.query(queryEmailCheck,[email],function (err,rows) {
        if (err) {
          console.log("Error Selecing : %s ",err );
          res.json({error:"error","code" : 100, "status":"error","statusMessage" : "Error in query"}).status(100);
          return;
        }
        if(rows.length==0){
          
          let query = `INSERT INTO USER SET name=?,password=?,email=?`

           connection.query(query,[name,password,email],function(err,rows){
              connection.release();
              if(err){
                   console.log("Error Inserting : %s ",err );
                  res.json({error:"error","code" : 100, "status":"error","statusMessage" : "Error in query"}).status(100);
                  return;

              }

                console.log("IN id is ")
                res.json({data:{id:rows.insertId},"status":"success","statusMessage" : "user registered"}).status(200);
                                         
           });
        }else{
          res.json({"status":"error","statusMessage" : "user email already taken"}).status(200);
        }

    })
      

    connection.on('error', function(err) {      
         res.json({error:"error","code" : 100, "status":"error","statusMessage" : "Error in connection database"}).status(100);

         return;     
    });
  });
});


module.exports = router;