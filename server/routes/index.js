import express from "express";
const router = express.Router();

import userRoute from "./user.route.js";


router.use("/user", userRoute);
export default router;