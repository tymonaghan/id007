const app = require('./server');

const port = process.env.PORT || 3007;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`flight 3007 to St. Petersburg now boarding`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
