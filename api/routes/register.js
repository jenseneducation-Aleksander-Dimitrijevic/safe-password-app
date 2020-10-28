const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  const user = await User.register(req.body);
  if (user) {
    res.status(201).json(user);
    return;
  }
  res.status(500).json({ error: "Något gick snett, försök igen..." });
});

module.exports = router;
