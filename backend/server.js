const http = require("http");
const { WebSocketServer } = require("ws");

const url = require("url");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 5000;

wsServer.on("connection", (connection, request) => {
  const parsedUrl = url.parse(request.url);
  console.log(parsedUrl);

  connection.on("message", (message) => {
    console.log(message.toString());
    // console.log(Array.from(message.toJSON()));
  });

  // connection.on('close',()=>{
  //   console.log('connection closed with')
  // })
});

server.listen(port, () => {
  console.log(`Websocket server is running on the port ${port}`);
});
