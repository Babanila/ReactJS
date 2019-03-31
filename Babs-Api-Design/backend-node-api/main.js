const bookmarkArray = [];

function alreadyBookmark({ id }) {
  return bookmarkArray.find(bookmark => bookmark.id === id);
}
exports.alreadyBookmark = alreadyBookmark;

function saveBookmark(repo) {
  return bookmarkArray.push(repo);
}
exports.saveBookmark = saveBookmark;

function returnBookmark() {
  return bookmarkArray;
}
exports.returnBookmark = returnBookmark;
