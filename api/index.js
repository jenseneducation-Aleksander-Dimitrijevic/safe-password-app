const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const userRouter = require("./routes/users");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
