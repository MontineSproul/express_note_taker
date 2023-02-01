const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
express().get('/', (req, res) => {
  console.log('Your fist route is working')
})

app.listen(4001);
