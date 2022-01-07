const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
const { addMessage, readMessage } = require("./user");

app.get("/read", async (req, res) => {
  const msglist = await readMessage();
  res.json(msglist);
});

app.post("/msg", async (req, res) => {
  const msg = req.body;
  addMessage(msg);
  res.json({ message: "Msgs sent successfully.." });
});
app.listen(5002, () => console.log("successfuly done."));
