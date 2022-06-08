const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/social-network-api",
//   {
//     useFindandModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   }
// );
// mongoose.set("debug", true);

// app.use(require("./routes"));

// app.listen(PORT, () => console.log("Connected on localhost:${PORT}"));
