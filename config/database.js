const mongoose = require("mongoose");

// connect to the database
mongoose.connect(process.env.DATABASE_URL);

// setup a special listener to listen for "connected" to mongoDB event

// setup a shortcut variable to the connection object
const db = mongoose.connection; // connnect is a method, connection is a property

// register a listener for connected events
db.on("connected", function () {
  console.log(`connected to MongoDB ${db.name} on ${db.host} port: ${db.port}`);
});
