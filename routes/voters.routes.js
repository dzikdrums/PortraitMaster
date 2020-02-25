const express = require("express");
const router = express.Router();

const voters = require("../controllers/voters.controller");

router.get("/voters", voters.loadAll);
// router.post("/photos", photos.add);
// router.put("/photos/vote/:id", photos.vote);

module.exports = router;
