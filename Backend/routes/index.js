import express from "express";
const router = express.Router();
import {
  registerController,
  loginController,
  userController,
  refreshController,
  musicController,
} from "../controllers";
import auth from "../middlewares/auth";
import admin from '../middlewares/admin';

// Login Routes
router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.get("/me", auth, userController.me);
router.post("/refresh", refreshController.refresh);
router.post("/logout", auth, loginController.logout);

// Music Routes
router.post("/music", [auth, admin], musicController.storeMusic);
router.put("/music/:musicId", [auth, admin], musicController.updateMusic);
router.delete("/music/:musicId", [auth, admin], musicController.deleteMusic);
router.get("/music", auth, musicController.getMusic);
router.put("/music/like/:musicId", auth, musicController.likeMusic);
router.get("/music/search/:title", auth, musicController.searchMusic);
router.get("/music/:id", musicController.streamingMusic);

export default router;
