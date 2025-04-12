    import express from "express";
    import { protectRoute } from "../middleware/auth.middleware.js";
    import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

    const router = express.Router();

router.get("/messages/:id", protectRoute, getMessages);     // renamed
router.post("/messages/send/:id", protectRoute, sendMessage); // renamed
router.get("/users", protectRoute, getUsersForSidebar);


    export default router;
