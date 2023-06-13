const express = require('express');
const cors = require('cors');
const {authMiddleware} = require('./middleware/auth')
const port = 8888;

const app = express()
const connectDB = require("./config/db");

connectDB()

app.use(express.json());
app.use(cors());

app.use("/api/post", authMiddleware, require("./routes/post.routes"));
app.use("/api/user", require("./routes/user.routes"));

app.listen(port, () => console.log('Server has started'))