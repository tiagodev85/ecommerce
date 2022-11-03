require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  console.log("conectado ao banco de dados")
);

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, () => console.log("servidor rodando"));
