const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  const register = await User.register(req.body);
  if (register) {
    res.json({ message: "User registered" });
    return;
  }
  res.status(500).json({ error: "Något gick snett, försök igen..." });
});

module.exports = router;
