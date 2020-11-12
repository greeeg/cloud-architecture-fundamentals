import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(9000, () => {
  console.log("App is listening on port 9000");
});
