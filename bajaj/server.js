const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const staticFilePath = path.join(__dirname, "/");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 4000;
const app = express();

app.set("port", PORT);
app.set("host", HOST);

// require("./database/database");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(staticFilePath));

const userRoutes = require("./routes/userRoutes");
userRoutes(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(staticFilePath, "index.html"));
});

app.listen(PORT, () => console.log("Listening @" + PORT));
