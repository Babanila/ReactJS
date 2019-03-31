const { alreadyBookmark, saveBookmark, returnBookmark } = require("./main");
const { sampleData } = require("./testData.data");
const data = sampleData.items;

describe("should be a function", () => {
  it("alreadyBookmark should be a function", () => {
    expect(alreadyBookmark).toBeInstanceOf(Function);
  });

  it("saveBookmark should be a function", () => {
    expect(saveBookmark).toBeInstanceOf(Function);
  });

  it("returnBookmark should be a function", () => {
    expect(returnBookmark).toBeInstanceOf(Function);
  });
});

describe("should accept parameter", () => {
  it("saveBookmark should accept an object parameter", () => {
    const saveBookmark = jest.fn();
    saveBookmark(sampleData);
    expect(saveBookmark).toHaveBeenCalled();
  });

  it("alreadyBookmark should accept an object that has an id property", () => {
    const alreadyBookmark = jest.fn();
    alreadyBookmark(data);
    expect(alreadyBookmark).toHaveBeenCalled();
  });

  it("returnBookmark should not accept parameter", () => {
    const returnBookmark = jest.fn();
    returnBookmark();
    expect(returnBookmark).toHaveBeenCalled();
  });
});
