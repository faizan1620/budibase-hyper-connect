const express = require( "express");
const dotenv = require( "dotenv");
const helmet = require( "helmet");
const cors = require( "cors");

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());

app.use(helmet());

app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.send("Citibot API V2 server");
});

// routes
app.use("/customer-config", require("./routes/customer_configuration"));

//
app.all("*", (req, res) => {
  res.status(404);
  res.send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is running at https://${host}:${port}`);
});
