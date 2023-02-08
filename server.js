const { randomUUID } = require('crypto');
const express = require('express');
const { fstat } = require('fs');
const app = express();
const PORT = process.env.PORT || 4001;
const path = require('path');
// parses JSON data
app.use(express.json());
// parses string/array data
app.use(express.urlencoded({ extended: true }));
// middleware to make the files static
app.use(express.static('public')); 
//post and get for /api/notes get is reading the notes and sending it to the front end the post is getting a new note and saving it to the backend
app.get('/api/notes', (req,res) => {
  fstat.readFile('.db/db/json', 'utf-8', (err, data) => {
  if (err) {
    console.log(error)
  } else {
    res.json(JSON.parse(data));
  }
})
});
// app.post get user input inside need an if to tell it to create a new note and readToFile and a writeToFile 
app.post('/api/notes', (req, res) => {
  console.log(`${req.method} request to add a note has been received`);
  const {title, text} = req.body;
  if (title && text) {
    const note = {
      title,
      text,
      id: randomUUID.v4(),
    };
    const response = {
      status: 'success!',
      body: note,
    };
    fs.readFile('.db/db.json', 'utf-8', (err, data) => {
      const newNotes = JSON.parse(data);
      newNotes.push(notes)
    fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err,) => {
      console.log(response);
      res.json(response);
    })
    })
  } else {
    res.json('unable to post new note');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
