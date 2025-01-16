const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Get the client's IP address
  const clientIp =
    req.headers["x-forwarded-for"] || // Header set by proxies/load balancers
    req.connection.remoteAddress || // Remote address directly from the connection
    req.socket.remoteAddress || // Remote address from the socket
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  res.send(`Your IP address is ${clientIp}`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
