const express = require('express');
const app = express();
const myPort = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// host static files from /public
app.use(express.static('public'));

// respond to GET requests to /helloWorld
app.get('/helloWorld', (req, res) => {
  res.send('Hello World!')
});

app.post('/api/image_upload', upload.array('img-input'), (req, res, next) => {
  console.log(req.files);
});

// start a web server
app.listen(myPort, () => {
  console.log('Example server app now listening on port '+myPort+'...')
});
