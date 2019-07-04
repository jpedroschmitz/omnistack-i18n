const { Router } = require("express");

const routes = new Router();

const users = [{ name: "João Pedro Schmitz", bio: "A JavaScript fan" }];

routes.post("/users", (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    return res
      .status(400)
      .json({ error: req.t("errors.users.allFieldsRequired") });
  }

  const newUser = { name, bio };
  users.push(newUser);

  return res.json(newUser);
});

routes.get("/users", (req, res) => {
  return res.json(users);
});

module.exports = routes;
