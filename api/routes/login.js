const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  const user = await User.login(req.body);
  if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(500).json({ error: "Något gick snett, försök igen..." });
});

module.exports = router;
