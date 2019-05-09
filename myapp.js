const express = require('express');
const app = express();
const myPort = 3000;

// if the below "address" is typed after "localhost:3000", then the browser will
// navigate you to a new "page" that just console-logs specific text.
app.get('/helloWorld', (req, res) => {
  res.send('Hello World!')
});

app.listen(myPort, () => {
  console.log('Example server app now listening on port '+myPort+'...')
});
// Code below is functionally identical to the code above!
// app.listen(port, () => console.log('Example app listening on port ${myPort}!'));


app.use(express.static('public'));
