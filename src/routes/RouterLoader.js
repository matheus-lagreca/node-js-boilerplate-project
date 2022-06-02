import express from "express";

// Import all the routers here
import model from "./ModelBaseRouter";

const router = express.Router();
model(router);

export default router;


