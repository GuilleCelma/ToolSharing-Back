require("dotenv/config");
require("./db");

const express = require("express");
const session = require("express-session")
const app = express();
const cors = require("cors")
require('./config/session.config')(app)

<<<<<<< HEAD

require("./config")(app)

=======
const app = express();
>>>>>>> 8f8d82ec2c75c069572382533a43bd1dea96a015



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
