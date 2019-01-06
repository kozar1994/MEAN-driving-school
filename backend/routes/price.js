const express = require("express");
const router = express.Router();
const controller = require("./../controllers/priceController");

router.get("/",controller.getAll);
router.get("/:id",controller.getOne);
router.delete("/:id",controller.delete);
router.post("/",controller.create);
router.patch("/:id",controller.update);

module.exports = router;