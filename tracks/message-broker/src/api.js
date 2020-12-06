const express = require("express");
const nsq = require("nsqjs");

const nsqWriter = new nsq.Writer("127.0.0.1", 4150);
nsqWriter.connect();

const app = express();

nsqWriter.on("ready", () => {
  const app = express();

  app.get("/send-email", (req, res) => {
    nsqWriter.publish("email_topic", "Some piece of information", (err) => {
      if (err) {
        return res.status(500).json({ message: "ERROR" });
      }

      return res.status(200).json({ message: "OK" });
    });
  });

  app.listen(9000, () => {
    console.log("App listening on port 9000");
  });
});

nsqWriter.on("closed", () => {
  console.log("Writer closed");
});
