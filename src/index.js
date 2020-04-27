const express = require('express');
const passport = require('passport');

const {
  AUTH_ACTIVE,
  AUTH_LOCAL_ACTIVE,
} = require('./config');

const app = express();

// middleware
app.use(express.json());

// routes
app.use(passport.initialize());

if (AUTH_ACTIVE) {
  console.log('auth active');
  const auth = require('./auth/auth');
  app.use('/auth', auth);

  if (AUTH_LOCAL_ACTIVE) {
    console.log('auth local active');
    const auth_local = require('./auth/local');
    app.use('/auth/local', auth_local);
  }
}

app.use('/healthz', (req, res) => {
  res.send('OK');
});

// error handler
app.use((err, req, res, next) => {
	if (err) {
		console.error(err.message);
		console.error(err.stack);
		return res.status(err.output.statusCode || 500).json(err.output.payload);
	}
});

const port = process.env.PORT || 3010;
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
