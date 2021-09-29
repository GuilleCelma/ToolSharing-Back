require("dotenv/config");
require("./db");

const express = require("express");
const session = require("express-session")
const app = express();
const cors = require("cors")
require('./config/session.config')(app)


require("./config")(app)




app.use(cors())



const index = require("./routes/auth");
app.use("/", index);

const user = require("./routes/user-routes");
app.use("/", user);

const review = require("./routes/review-routes");
app.use("/", review);

const productRouter = require("./routes/product-routes");
app.use("/", productRouter);

require("./error-handling")(app);

module.exports = app;
