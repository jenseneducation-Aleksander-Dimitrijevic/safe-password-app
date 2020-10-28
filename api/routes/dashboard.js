const router = require("express").Router();
const { verifyUser } = require("./verifyUser");

router.get("/", verifyUser, (req, res) => {
  const user = req.user;
  if (user) {
    res.status(200).json(user);
    return;
  }
  res
    .status(401)
    .json({ error: "Du är inte autoriserad till denna webbplats" });
});

module.exports = router;
