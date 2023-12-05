import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Chat con tatux",
    name: "Eric",
    fileCss: "styles.css",
  });
});

// Form
router.get("/form", (req, res) => {
  res.render("form", {
    title: "Form example",
    fileCss: "styles.css",
  });
});

const users = [];

router.post("/user", (req, res) => {
  const { name, age } = req.body;

  users.push({
    name,
    age,
  });
});

export default router;
