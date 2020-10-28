const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");

app.use(cors());
app.use(express.json());
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/dashboard", dashboardRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
