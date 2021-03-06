const express = require('express');
const path = require('path');
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));




// Create a database connection configuration
const db = mysql.createConnection({
  host: "35.222.21.151",
  user: "jj-user",
  password: "JJ-4999",
  database: "jjacademy", 
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

  let sql = `Select * From journal_Entries Where user_id = ${userid} order by entry_Date desc;`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      response.send(JSON.stringify(result))
    }
  });
});

app.post('/journal-entry', (request, response) => {
  let body = request.body


  let sql = `Insert Into journal_Entries Values(${Math.floor(Math.random() * 10000)}, '${body.title}', '${body.text}', curdate(), ${body.userid}, '${body.link}');`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      response.send(JSON.stringify(result))
    }
  });
})


app.post('/match', (request, response) => {
  let body = request.body


  let sql = `Insert Into Matches  Values( ${Math.floor(Math.random() * 10000)}, ${body.userid},' ${body.title}', curdate(), '${body.text}' );`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      response.send(JSON.stringify(result))
    }
  });
})

app.get('/allMatches', (req, res) => {

  sql = `
  Select  CONCAT(m.match_Title, ' - Uploaded By ', u.user_Fname) As title , match_Date As date, match_Link As link, match_ID 
  From Matches m
  Join Users u On m.user_id = u.userID
  Order By date desc;`

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log('Grabbed all matches');
      res.send(JSON.stringify(result))
    }
  });

})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


//Inserts new journal entry into database.
app.post("/insertJournalEntry", (req, res) => {
  const entrybutton = req.body.entrybtn1;


  sql = `insert into journal_Entries set user_id = select user_id 
  from journal_Entries
  where 
      exists(
          select * 
          from Users 
          where journal_Entries.user_id = Users.userID); entry_Title = '${req.body.entryTitle}',  entry_Text = '${req.body.notes}', entry_Date = curdate()`;

 query = db.query(sql, (err, result) => {
   if (err) {
     throw err;
   }
   res.send(`Item entry was added in the db...`);
 });
});

app.post('/credentials', (req, res) => {
  let response = req.body

  sql = `Select * From Users Where user_Name = '${response.user}' And user_Password = '${response.password}'`

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log('Successfully logged in');
      res.send(JSON.stringify(result))
    }
  });

})


//delete journal entry
app.post("/deletejournal/:journalID", (req, res) => {
  let journalID = req.params.journalID
  sql = `delete from journal_Entries where entry_ID = ${journalID}`
 query = db.query(sql, (err, result) => {
   if (err) {
     throw err;
   }
   else {
     console.log("Successfully deleted")
     res.send("Successfully deleted")
   }

 });
});

//update journal info
app.post("/updatejournal", (req, res) => {
  sql = `update journal_Entries set entry_Title = '${req.body.entryTitle}',  entry_Text = '${req.body.notes}', entry_Link = '${req.body.link}' where entry_ID = ${req.body.journalId}`
 query = db.query(sql, (err, result) => {
   if (err) {
     throw err;
   }
   else{
     console.log("entry updated")
     res.send("edit success")
   }

 });
});
