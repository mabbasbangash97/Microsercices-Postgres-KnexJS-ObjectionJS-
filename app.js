const express = require("express");
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require("./utilities/producer");
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
const databaseConfig = require("./database/DatabaseConfig");
const users = require("./routes/user");
const tenants = require("./routes/tenant");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//initalize db
app.use(databaseConfig.initializeDB());

//adding routes
app.use("/user", users);
app.use("/tenant/", tenants);

app.use("/", async (req, res) => {
  console.log("HEREEEE");
  return res
    .status(200)
    .json({ message: `App is running on port. ${process.env.PORT || 4000}` });
});

app.listen(process.env.PORT || 4000, async () => {
  console.log("App started at port", process.env.PORT || 4000);
  await initProducer();
});
