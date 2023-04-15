const menuRoute = require("express").Router();
const { MenuController } = require("../controllers");
const checkToken = require("../services/checkToken");
const upload = require("../services/multer");

menuRoute.get("/", MenuController.getMenu);
menuRoute.get("/:id", MenuController.detail);
menuRoute.post("/", checkToken, upload.single("image"), MenuController.create);
menuRoute.delete("/:id", MenuController.delete);
menuRoute.put("/:id", upload.single("image"), MenuController.update);

module.exports = menuRoute;
