import express from "express";
import router from "./routes";
// import http from "http";


const app = express();


app.use("/", router);

// locale test
// const httpServer = http.createServer(app);

// const server = httpServer.listen(8080, () => {
//   console.info(`Server listening on port ${8080}`);
//
//   server.on("close", () => {
//     console.info("Server closed");
//   });
// });


export default app;
