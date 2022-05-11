require("dotenv").config();

const express = require("express");
const cors = require("cors");
const middleware = require("./middleware");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(middleware.decodeToken);

app.get("/api/v1/todos", (req, res) => {
  console.log(req.headers);

  return res.json({
    todos: [
      {
        title: "Task1",
      },
      {
        title: "Task2",
      },
      {
        title: "Task3",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
