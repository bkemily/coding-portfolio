const app = require('./src/app');

// Database setup and connection
require("./mongodb/db.config");

// Choose the port number to run the app under
const port = process.env.PORT || 3000;

// Create a new app instance, tell it to start listening
app.listen(port, () => {
    console.log(`The server is listening on http://localhost:${port}.`);
});