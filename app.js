const HTTP = require("http");
const events = require("events");
const eventEmitter = new events();
const PORT = 5050;
//method files
const defaultHandler = require("./Helper/error-handler");
const getHandler = require("./Methods/get");
const postHandler = require("./Methods/post");
const putHandler = require("./Methods/put");
const deleteHandler = require("./Methods/delete");
let count = 0;
// event count

eventEmitter.on("count", () => {
  console.log("api-call = " + ++count);
});

// create HTTP.Server

const SERVER = HTTP.createServer((req, res) => {
  console.log("Connected........!");
  const reqURL = req.url;
  const reqMethod = req.method;
  switch (reqMethod) {
    case "GET": {
      if (reqURL === "/get") {
        getHandler(req, res);
        eventEmitter.emit("count");
      }
      break;
    }
    case "POST": {
      if (reqURL === "/post") {
        postHandler(req, res);
        eventEmitter.emit("count");
      }
      break;
    }
    case "PUT": {
      if (reqURL === "/put") {
        putHandler(req, res);
        eventEmitter.emit("count");
      }
      break;
    }
    case "DELETE": {
      if (reqURL === "/delete") {
        deleteHandler(req, res);
        eventEmitter.emit("count");
      }
      break;
    }

    default: {
      defaultHandler(req, res);
      eventEmitter.emit("count");
    }
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server connected localhost:${PORT}`);
});
