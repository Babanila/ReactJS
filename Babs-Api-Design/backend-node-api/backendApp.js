const express = require("express");
const axios = require("axios");
const { alreadyBookmark, saveBookmark, returnBookmark } = require("./main");

const app = express();
const defaultWeb = "https://api.github.com";
const bookmarkedRepositories = returnBookmark();

// Search parameter
app.get("/defaultWeb/repository_url/:query", async (req, res) => {
  const url = `${defaultWeb}/search/repositories?q=${req.params.query}`;
  try {
    const { data } = await axios.get(url);

    res.status(200).send(data);
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText);
  }
});

// Bookmarks by ID
app.get("/defaultWeb/repository_bookmark_url/:id", async (req, res) => {
  const url = `${defaultWeb}/repositories/${req.params.id}`;
  let result;
  try {
    result = await axios.get(url);

    const repo = {
      id: result.data.id,
      name: result.data.name,
      html_url: result.data.html_url
    };

    const duplicateRepo = alreadyBookmark(repo);
    if (duplicateRepo) {
      res.status(202).send("Already a bookmark!");
    } else {
      saveBookmark(repo);
      res.status(200).send(repo);
    }
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText);
  }
});

// Get all saved bookmarks
app.get("/defaultWeb/save-repos", (req, res) => {
  try {
    res.status(200).send({
      numberOfItems: bookmarkedRepositories.length,
      bookmarkedRepositories
    });
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText);
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
