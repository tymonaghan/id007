const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const bodyParser = require('body-parser');

//body parsing middlewarez
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// http logging
app.use(volleyball);

// static index/home and static middleware
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);
// ^ this HAS TO GO BEFORE app.use(staticMiddleware)

const staticMiddleWare = express.static(path.join(__dirname, '../public'));
app.use(staticMiddleWare);

// index redirector for requests without an extension name
app.use('*', (req, res) => {
  //logging:
  console.log(
    `app.use(*) caught ${req.method} request to ${req.url}\nserving ${path.join(
      __dirname,
      '../public/index.html'
    )}`
  );
  // console.dir(req.headers.authorization);
  // end logging
  res.sendFile(path.join(__dirname, '../index.html'));
});

// 404
app.use((req, res, next) => {
  // catch any requests to stuff with a file extension and 404
  if (path.extname(req.path).length) {
    const artificialFourOhFour = new Error('404 not found sucka!');
    next(artificialFourOhFour);
    res
      .status(404)
      .send(
        "You are requesting a file that doesn't exist. Please go back and try again"
      );
  } else {
    next();
  }
});

// 500 error handler/logger/we blew it-catcher
// print the error to our console and send the user a generic "internal server error" message
app.use(function (err, req, res) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// export router
module.exports = app;
