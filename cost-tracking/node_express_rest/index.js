import express from "express";
import bodyParser from "body-parser";
//import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.get("/api/v1/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
