const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// parses JSON data
app.use(express.json());
// parses string/array data
app.use(express.urlencoded({ extended: true }));
// middleware to make the files static
app.use(express.static('public')); 
//post and get for /api/notes get is reading the notes and sending it to the front end the post is getting a new note and saving it to the backend
app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
