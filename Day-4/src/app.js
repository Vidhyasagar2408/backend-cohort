const express = require("express");

const app = express();

app.use(express.json());

const notes = [
  {
    title: "test title 1",
  },
];

app.post("/notes", (req, res) => {
  console.log(req.body);

  notes.push(req.body);

  res.send("notes created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:id", (req, res) => {
  delete notes[req.params.id];
  res.send("node deleted successfully");
});

app.patch("/notes/:id", (req, res) => {
  notes[req.params.id].description = req.body.description;
  res.send("updated successfully");
});

module.exports = app;
