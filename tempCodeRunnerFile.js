
});
app.post("/signup", async (req, res) => {
  const { name, username, age, email, password } = req.body;
  const exists = await users.findOne({ email: email });
  if (exists) {
    res.send("Account exits,redirecting to login");
  } else {