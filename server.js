const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

const app = express();

require("dotenv").config();
require("./config/database");

// const coursesRouter = require("./routes/api/courses")
// const roundsRouter = require("./routes/api/rounds")

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API Routes here
app.use("/api/users", require("./routes/api/users"));
app.use("/api/courses", require("./routes/api/courses"))
app.use("/api/rounds", require("./routes/api/rounds"))

app.use(require("./config/auth"));

// catchall
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});