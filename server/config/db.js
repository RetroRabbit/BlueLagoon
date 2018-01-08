var mysql     =    require('mysql');
var con = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'passsql',
   database : 'chatterbox',
   debug	: false
});

var USER=
"CREATE TABLE IF NOT EXISTS USER(id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(255) UNIQUE NOT NULL,name VARCHAR(255),password VARCHAR(255) NOT NULL,image VARCHAR(255),date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"

var CONTACTS=
"CREATE TABLE IF NOT EXISTS CONTACTS(id INT AUTO_INCREMENT PRIMARY KEY,user_id INT,contact_id INT, date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(user_id) REFERENCES USER (id),FOREIGN KEY(contact_id) REFERENCES USER (id))"

var CHATS=
"CREATE TABLE IF NOT EXISTS CHATS(id INT AUTO_INCREMENT PRIMARY KEY,from_id INT,to_id INT,message TEXT,viewed INT(1), date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(from_id) REFERENCES USER (id),FOREIGN KEY(to_id) REFERENCES USER (id))"


var tables=[USER,CONTACTS,CHATS];
var tableNames=["USER","CONTACTS","CHATS"];

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS chatterbox", function (err, result) {
    if (err) throw err;
	  for (var i = 0; i < tables.length; i++) {
		  con.query(tables[i], function (err, result) {
		    if (err) throw err;
		    console.log(tableNames[i]+" created");
		  });
	  }
  });
});

/*var USER=
"CREATE TABLE USER("+
	+"user_id INT AUTO_INCREMENT PRIMARY KEY,"+
	+"user_email VARCHAR(255) UNIQUE,"+
	+"user_firstname VARCHAR(255) NOT NULL,"+
	+"user_surname VARCHAR(255),"+
	+"user_password VARCHAR(255) NOT NULL,"+
	+"user_phone VARCHAR(25) UNIQUE NOT NULL,"+
	+"user_dateregistered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,"+
+")"+
var DEPENDANTS=
CREATE TABLE DEPENDANTS(
	dependant_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	dependant_firstname VARCHAR(255) NOT NULL,
	dependant_surname VARCHAR(255),
	dependant_phone VARCHAR(25) NOT NULL,
	dependant_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES USER (user_id)
)
var APP_USER_PROFILE=
CREATE TABLE APP_USER_PROFILE(
	user_id INT,
	user_bloodtype VARCHAR(3),
	user_gender VARCHAR(6),
	user_suburb VARCHAR(255),
	user_city VARCHAR(255),
	user_country VARCHAR(255),
    FOREIGN KEY(user_id) REFERENCES USER (user_id)
)

var ISSUE=
`CREATE TABLE ISSUE(
	issue_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	issue_category TEXT,
	issue_description TEXT,
	issue_address TEXT,
	issue_longitude FLOAT,
	issue_latitude FLOAT,
	issue_closed INT,
	date_issued TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	date_closed TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES USER (user_id)
)`

var MEDIA=
"CREATE TABLE MEDIA(media_id INT AUTO_INCREMENT PRIMARY KEY,issue_id INT,media longblob)"
*/