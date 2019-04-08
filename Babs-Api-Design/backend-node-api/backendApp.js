const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { alreadyBookmark, saveBookmark, returnBookmark } = require("./main");

const app = express();
const defaultWeb = "https://api.github.com";
const bookmarkedRepositories = returnBookmark();

// Setting CORS
app.use(cors());

// Search parameter
app.get("/repository/:query", async (req, res) => {
  const url = `${defaultWeb}/search/repositories?q=${req.params.query}`;
  try {
    const { data } = await axios.get(url);

    res.status(200).send(data);
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText);
  }
});

// Bookmarks by ID
app.get("/repository_id/:id", async (req, res) => {
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
      console.warn("Already a bookmark!");
      res.status(200).send(result.data);
    } else {
      saveBookmark(result.data);
      res.status(200).send(result.data);
    }
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText);
  }
});

// Get all saved bookmarks
app.get("/save-repos", (req, res) => {
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
