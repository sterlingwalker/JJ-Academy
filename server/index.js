const express = require('express');
const path = require('path');
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));




// Create a database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tommy1262",
  database: "jjAcademy", 
});

// Establish connection with the DB
db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Successful connected to the DB....`);
  }
});

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data


app.get('/journal-entry/:userid', (request, response) => {
  
  let userid = request.params.userid

  let sql = `Select * From journal_Entries Where user_id = ${userid};`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      response.send(JSON.stringify(result))
    }
  });
});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

