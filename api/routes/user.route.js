import express from "express";
import {
  UpdateUser,
  deleteUser,
  getUsers,
  signout,
  test,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, UpdateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", getUsers);
export default router;
