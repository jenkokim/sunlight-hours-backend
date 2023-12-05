import express from "express";
import router from "./routes";
// import http from "http";


const app = express();


app.use("/", router);

export default app;
