const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


router.get('/api/notes', (req,res) => {
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    res.json(JSON.parse(data));
  }
})
});
// router.post get user input inside need an if to tell it to create a new note and readToFile and a writeToFile 
router.post('/api/notes', (req, res) => {
  console.log(`${req.method} request to add a note has been received`);
  const {title, text} = req.body;
  if (title && text) {
    const note = {
      title,
      text,
      id: uuidv4(),
    };
    const response = {
      status: 'success!',
      body: note,
    };
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      const newNotes = JSON.parse(data);
      newNotes.push(note)
    fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err,) => {
      console.log(response);
      res.json(response);
    })
    })
  } else {
    res.json('unable to post new note');
  }
});

module.exports = router;