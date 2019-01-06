const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

//include routs
const authRouter = require("./routes/auth");
const advantageRouter = require("./routes/advantage");
const priceRouter = require("./routes/price");
const teacherRouter = require("./routes/teacher");
const eventRouter = require("./routes/event");

const app = express();
app.use(morgan("dev"));
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
//install routs
app.use("/api/auth", authRouter);
app.use("/api/advantage", advantageRouter);
app.use("/api/price", priceRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/event", eventRouter);

module.exports = app;