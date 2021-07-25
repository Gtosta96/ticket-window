import SocketIO from "socket.io";
import jsonServer from "json-server";
import path from "path";

// ----- CONFIG ----- //

const SERVER_PORT = 3333;
const WS_PORT = 3334;

// io config
const io = new SocketIO.Server();
io.attach(WS_PORT);

// server config
const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(middlewares);
const router = jsonServer.router(path.join(__dirname, "db/db.json"));

// server.use((req, res, next) => {
//   if (req.method === `POST`) {
//     io.sockets.emit("STATUS_CHANGED", "everyone");
//   }

//   next();
// });

server.use(router);

// ----- SOCKET.IO ----- //

io.on("connection", (socket) => {
  console.log("a user connected");
});

// ----- START SERVER ----- //

server.listen(SERVER_PORT, () => {
  console.log(`Listening at port ${SERVER_PORT}`);
});
