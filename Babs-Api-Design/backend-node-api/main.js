const bookmarkArray = [];

function alreadyBookmark(repo) {
  return bookmarkArray.find(bookmark => bookmark.id === repo.id);
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
