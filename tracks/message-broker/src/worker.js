const nsq = require("nsqjs");

const nsqReader = new nsq.Reader("email_topic", "send", {
  lookupdHTTPAddresses: "192.168.0.21:4161",
});

nsqReader.connect();

console.log("Worker started & waiting for messages");

nsqReader.on("message", (msg) => {
  console.log("Received message [%s]: %s", msg.id, msg.body.toString());

  setTimeout(() => {
    console.log(`Email sent for ${msg.id}`);
    msg.finish();
  }, 5000);
});
